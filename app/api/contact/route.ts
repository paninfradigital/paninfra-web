import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function optionalHtmlField(label: string, value: unknown) {
  if (!value) return "";

  return `
    <div class="field">
      <div class="label">${label}:</div>
      <div class="value">${escapeHtml(value)}</div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content for Pan Infra
    const mailOptions = {
      from: `"${body.name}" <${process.env.SMTP_FROM}>`, // Display user's name
      replyTo: `"${body.name}" <${body.email}>`, // Reply goes directly to user
      to: process.env.CONTACT_EMAIL || "info@paninfra.com",
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #005c97, #1e96d3); color: white; padding: 20px; text-align: center; }
            .content { background: #f8f6f2; padding: 30px; margin-top: 20px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #005c97; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 3px solid #ee2e22; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Pan Infra Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${escapeHtml(body.name)}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></div>
              </div>
              ${
                body.phone
                  ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${escapeHtml(body.phone)}">${escapeHtml(body.phone)}</a></div>
              </div>
              `
                  : ""
              }
              ${optionalHtmlField("Budget", body.budget)}
              ${optionalHtmlField("Interested Property", body.propertyInterest)}
              ${optionalHtmlField("Looking for Sq.Yds", body.sqYards)}
              ${optionalHtmlField("Source", body.source)}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${escapeHtml(body.message).replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the Pan Infra contact form</p>
              <p>Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - Pan Infra

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ""}
${body.budget ? `Budget: ${body.budget}` : ""}
${body.propertyInterest ? `Interested Property: ${body.propertyInterest}` : ""}
${body.sqYards ? `Looking for Sq.Yds: ${body.sqYards}` : ""}
${body.source ? `Source: ${body.source}` : ""}

Message:
${body.message}

---
Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
