"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaCommentDots,
  FaDollarSign,
  FaEnvelope,
  FaFileSignature,
  FaHandshake,
  FaHeadset,
  FaHourglassHalf,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaRupeeSign,
  FaRulerCombined,
  FaSearch,
  FaSpinner,
  FaTag,
  FaUser,
} from "react-icons/fa";
import styles from "./Landingpage.module.css";

const properties = [
  {
    name: "KumbhaSthala Dukes County",
    location: "Velimala",
    area: "200 - 893 Sq.Yds",
    price: "₹50,000 - ₹60,000 / Sq.Yd",
    status: "Now Selling",
    image: "/covers/DukesCounty_Velimala.png",
    alt: "KumbhaSthala Dukes County project",
    href: "/projects/dukes-county",
  },
  {
    name: "Pan Dukes Urban Village",
    location: "Kothur, Ranga Reddy",
    area: "300 - 1067 Sq.Yds",
    price: "₹25,000 / Sq.Yd",
    status: "Now Selling",
    image: "/covers/DUKES_URBAN_VILLAGE.png",
    alt: "Pan Dukes Urban Village project",
    href: "/projects/dukes-urban-village",
  },
  {
    name: "KumbhaSthala Tech City",
    location: "Kadthal, Ranga Reddy",
    area: "150 - 380 Sq.Yds",
    price: "₹18,000 / Sq.Yd",
    status: "Now Selling",
    image: "/covers/NEOPOLIS_JANWADA.png",
    alt: "KumbhaSthala Tech City project",
    href: "/projects/kumbasthala-tech-city",
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  budget: "",
  propertyInterest: "",
  sqYards: "",
  message: "",
  website: "",
  agreeTerms: false,
  confirmIntent: false,
};

function isValidEmail(email) {
  return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 12;
}

export default function Landingpage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [cooldown, setCooldown] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitDisabled = cooldown > 0;

  useEffect(() => {
    if (cooldown <= 0) return undefined;

    const timer = window.setInterval(() => {
      setCooldown((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldown]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleAnchorClick = (event, href) => {
    const target = document.querySelector(href);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (form.website.trim()) {
      return { valid: false, bot: true, errors: nextErrors };
    }

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    else if (form.fullName.trim().length < 2) nextErrors.fullName = "Enter a valid name.";

    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!isValidPhone(form.phone)) nextErrors.phone = "Enter a valid phone number (min 10 digits).";

    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    else if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email (e.g., name@domain.com).";

    if (!form.budget) nextErrors.budget = "Please select your estimated budget.";
    if (!form.propertyInterest) nextErrors.propertyInterest = "Please select an interested property.";
    if (!form.sqYards) nextErrors.sqYards = "Please select the Sq.Yds range.";

    if (!form.message.trim()) nextErrors.message = "Please share your requirements or message.";
    else if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";

    if (!form.agreeTerms) nextErrors.form = "You must agree to the privacy policy.";
    if (!form.confirmIntent) nextErrors.form = "Please confirm that this is a serious inquiry.";

    return { valid: Object.keys(nextErrors).length === 0, errors: nextErrors };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (submitDisabled) {
      setStatus({ type: "error", message: "Please wait for the submit button to become active." });
      return;
    }

    const result = validate();

    if (result.bot) {
      setStatus({ type: "error", message: "Submission failed. Please try again." });
      return;
    }

    setErrors(result.errors);

    if (!result.valid) {
      setStatus({ type: "error", message: result.errors.form || "Please fix the errors above." });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiMessage = [
        form.message.trim(),
        "",
        `Budget: ${form.budget}`,
        `Interested Property: ${form.propertyInterest}`,
        `Looking for Sq.Yds: ${form.sqYards}`,
        "Source: Prime Estate landing page",
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          budget: form.budget,
          propertyInterest: form.propertyInterest,
          sqYards: form.sqYards,
          source: "Prime Estate landing page",
          message: apiMessage,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send request. Please try again.");
      }

      setStatus({
        type: "success",
        message: `Thank you ${form.fullName.trim()}! One of our experts will contact you within 24h regarding ${form.propertyInterest}.`,
      });
      setForm(initialForm);
      setErrors({});
      setCooldown(5);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field) => {
    const nextErrors = { ...errors };

    if (field === "fullName") {
      nextErrors.fullName = form.fullName.trim() ? "" : "Name required";
    }

    if (field === "phone") {
      nextErrors.phone = form.phone.trim() && !isValidPhone(form.phone) ? "Valid phone required" : "";
    }

    if (field === "email") {
      nextErrors.email = form.email.trim() && !isValidEmail(form.email) ? "Valid email required" : "";
    }

    if (field === "message") {
      const message = form.message.trim();
      nextErrors.message = message && message.length < 10 ? "At least 10 characters" : "";
    }

    setErrors(nextErrors);
  };

  return (
    <div className={styles.page}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-0YDKGCY1V9" strategy="afterInteractive" />
      <Script id="prime-estate-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0YDKGCY1V9');
        `}
      </Script>

      <section className={styles.hero} id="home">
        <div className={`${styles.container} ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>#1 Luxury Real Estate</span>
            <h1>
              Find Your <span className={styles.highlight}>Dream Home</span> with Confidence
            </h1>
            <p>Discover premium properties, expert guidance, and seamless buying experience. Your next chapter starts here.</p>
            <div className={styles.heroButtons}>
              <a className={styles.btnPrimary} href="/projects">
                <FaSearch /> Explore Properties
              </a>
              <a className={styles.btnOutline} href="tel:8999666888">
                <FaHeadset /> Talk to Expert
              </a>
            </div>
          </div>

          <div className={styles.heroStats}>
            {[
              ["1,000+", "Families"],
              ["800+", "Acres"],
              ["15+", "Projects"],
            ].map(([value, label]) => (
              <div className={styles.statItem} key={label}>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.properties} id="properties">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Featured Listings</span>
            <h2>
              Handpicked <span className={styles.highlight}>Premium Properties</span>
            </h2>
            <p>Modern designs, prime locations, and exceptional value.</p>
          </div>

          <div className={styles.propertiesGrid}>
            {properties.map((property) => (
              <article className={styles.propertyCard} key={property.name}>
                <div className={styles.propertyImg}>
                  <Image src={property.image} alt={property.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className={styles.propertyInfo}>
                  <h3>{property.name}</h3>
                  <p className={styles.propertyLocation}>
                    <FaMapMarkerAlt /> {property.location}
                  </p>
                  <div className={styles.propertyFeatures}>
                    <span>
                      <FaRulerCombined /> {property.area}
                    </span>
                    <span>
                      <FaRupeeSign /> {property.price}
                    </span>
                  </div>
                  <span className={styles.propertyStatus}>{property.status}</span>
                  <a className={styles.btnProperty} href={property.href}>
                    View More <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Choose Us</span>
            <h2>
              Premium <span className={styles.highlight}>Real Estate Services</span>
            </h2>
            <p>Tailored solutions for buyers, sellers, and investors.</p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              [FaChartLine, "Market Analysis", "Data-driven insights to maximize your property's value."],
              [FaHandshake, "Negotiation Expert", "Get the best deals with our professional negotiators."],
              [FaFileSignature, "Legal Support", "Full documentation and legal assistance."],
            ].map(([Icon, title, copy]) => (
              <article className={styles.serviceCard} key={title}>
                <div className={styles.serviceIcon}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={`${styles.container} ${styles.contactContainer}`}>
          <div className={styles.contactInfo}>
            <span className={styles.sectionTag}>Get In Touch</span>
            <h2>
              Let&apos;s Discuss Your <span className={styles.highlight}>Real Estate Goals</span>
            </h2>
            <p>Our experts are ready to help you find the perfect property or sell with confidence.</p>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <span>Phone</span>
                <a href="tel:+918999666888">+91 8999 666 888</a>
              </div>
              <div className={styles.contactDetailItem}>
                <span>Email</span>
                <a href="mailto:info@paninfra.com">info@paninfra.com</a>
              </div>
              <div className={styles.contactDetailItem}>
                <span>Address</span>
                <p>A1, 7th floor Dallas Centre, 83/1, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032</p>
              </div>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3>Request a Callback</h3>

              <div className={styles.frictionNotice}>
                <FaHourglassHalf />
                <span>Please allow 2-3 minutes to complete this form. Quality inquiries get priority response.</span>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">
                    <FaUser /> Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    required
                  />
                  <small className={styles.errorMsg}>{errors.fullName}</small>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    <FaPhone /> Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    onBlur={() => handleBlur("phone")}
                    required
                  />
                  <small className={styles.errorMsg}>{errors.phone}</small>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  <FaEnvelope /> Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  onBlur={() => handleBlur("email")}
                  required
                />
                <small className={styles.errorMsg}>{errors.email}</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="budget">
                  <FaDollarSign /> Estimated Budget *
                </label>
                <select id="budget" value={form.budget} onChange={(event) => updateField("budget", event.target.value)} required>
                  <option value="">-- Select your budget range --</option>
                  <option >40Lakhs to 70Lakhs</option>
                   <option >70Lakhs to 1Cr</option>
                    <option >1Cr to 2Cr</option>
                     <option >2Cr to 3Cr</option>
                     <option>3Cr+</option>
                  
                </select>
                <small className={styles.errorMsg}>{errors.budget}</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="propertyInterest">
                  <FaTag /> Interested Property *
                </label>
                <select
                  id="propertyInterest"
                  value={form.propertyInterest}
                  onChange={(event) => updateField("propertyInterest", event.target.value)}
                  required
                >
                  <option value="">-- Select Property --</option>
                  <option value="KumbaSthala Tech City">KumbaSthala Tech City</option>
                  <option value="PAN Dukes Urban Village">PAN Dukes Urban Village</option>
                  <option value="KumbaSthala Dukes County">KumbaSthala Dukes County</option>
                  <option value="Janwada Farmhouse">Janwada Farmhouse</option>
                </select>
                <small className={styles.errorMsg}>{errors.propertyInterest}</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="sqYards">
                  <FaDollarSign /> Looking for Sq.Yds *
                </label>
                <select
                  id="sqYards"
                  value={form.sqYards}
                  onChange={(event) => updateField("sqYards", event.target.value)}
                  required
                >
                  <option value="">-- Select range --</option>
                  <option value="150 to 200">150 to 200</option>
                  <option value="201 to 300">201 to 300</option>
                  <option value="301 to 400">301 to 400</option>
                  <option value="401 to 500">401 to 500</option>
                  <option value="501 & Above">501 & Above</option>
                </select>
                <small className={styles.errorMsg}>{errors.sqYards}</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  <FaCommentDots /> Message / Requirements *
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your dream home or investment needs..."
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  onBlur={() => handleBlur("message")}
                  required
                />
                <small className={styles.errorMsg}>{errors.message}</small>
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="website">Leave empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  value={form.website}
                  onChange={(event) => updateField("website", event.target.value)}
                />
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  id="agreeTerms"
                  type="checkbox"
                  checked={form.agreeTerms}
                  onChange={(event) => updateField("agreeTerms", event.target.checked)}
                  required
                />
                <label htmlFor="agreeTerms">
                  I agree to receive property updates and accept the <a href="#contact">privacy policy</a> *
                </label>
              </div>

              <div className={`${styles.checkboxGroup} ${styles.frictionCheckbox}`}>
                <input
                  id="confirmIntent"
                  type="checkbox"
                  checked={form.confirmIntent}
                  onChange={(event) => updateField("confirmIntent", event.target.checked)}
                  required
                />
                <label htmlFor="confirmIntent">
                  <strong>I confirm this is a serious inquiry</strong> and I&apos;m ready to speak with an agent within 24 hours.
                </label>
              </div>

              <button className={`${styles.btnPrimary} ${styles.btnSubmit}`} type="submit" disabled={submitDisabled || isSubmitting}>
                {isSubmitting ? <FaSpinner className={styles.spinner} /> : <FaPaperPlane />}
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>

              <div className={`${styles.cooldownMessage} ${!submitDisabled ? styles.cooldownReady : ""}`}>
                {submitDisabled ? (
                  <>
                    <FaSpinner className={styles.spinner} /> Please wait <span>{cooldown}</span> seconds before submitting...
                  </>
                ) : (
                  <>
                    <FaCheckCircle /> You can now submit the form.
                  </>
                )}
              </div>

              {status && (
                <div className={`${styles.formStatus} ${status.type === "success" ? styles.successStatus : styles.errorStatus}`}>
                  {status.type === "success" && <FaCheckCircle />}
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
