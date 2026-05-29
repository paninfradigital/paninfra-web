"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(0,0,0,0.15)",
  padding: "0.65rem 0.85rem",
  fontSize: "0.9rem",
  outline: "none",
  background: "#ffffff",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.65rem",
  letterSpacing: "0.15em",
  
  color: "#4a7fa3",
  marginBottom: "0.5rem",
};

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action={handleSubmit}
      aria-label="Contact form"
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <p style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.5rem", color: "#005c97", marginBottom: "0.5rem" }}>
        Send Us a Message
      </p>

      <label style={{ display: "block" }}>
        <span style={labelStyle}>Name *</span>
        <input
          name="name" required
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "#ee2e22")}
          onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
        />
      </label>

      <label style={{ display: "block" }}>
        <span style={labelStyle}>Email *</span>
        <input
          type="email" name="email" required
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "#ee2e22")}
          onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
        />
      </label>

      <label style={{ display: "block" }}>
        <span style={labelStyle}>Phone</span>
        <input
          name="phone"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "#ee2e22")}
          onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
        />
      </label>

      <label style={{ display: "block" }}>
        <span style={labelStyle}>Message *</span>
        <textarea
          name="message" required rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={e => (e.target.style.borderColor = "#ee2e22")}
          onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending" || status === "done"}
        style={{
          padding: "1.1rem 2.5rem",
          background: "#ee2e22",
          color: "#ffffff",
          border: "none",
          fontSize: "0.75rem",
          letterSpacing: "0.22em",
          
          cursor: status === "done" ? "default" : "pointer",
          transition: "background 0.25s",
          fontFamily: "inherit",
          alignSelf: "flex-start",
          fontWeight: 800,
        }}
      >
        {status === "sending" ? "Sending..." : status === "done" ? "Message Sent ✓" : "Send Message →"}
      </button>

      {status === "error" && (
        <p style={{ fontSize: "0.85rem", color: "#c0392b" }}>Unable to send. Please email us directly at info@paninfra.com</p>
      )}
    </form>
  );
}
