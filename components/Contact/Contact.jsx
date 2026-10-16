import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://backendagency-production-eabb.up.railway.app/api/inquiries",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong"
                );
            }

            console.log("Inquiry submitted:", data);

            setSubmitted(true);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        } catch (error) {
            console.error("Submission error:", error);

            alert(
                "Something went wrong while sending your inquiry. Please try again."
            );
        }
    };

    return (
        <main className="contact-page">

            {/* =====================================================
          TOP
      ===================================================== */}

            <section className="contact-hero">

                <div className="contact-topline">
                    <span>(06)</span>
                    <span>LET'S TALK</span>
                    <span>START A PROJECT ↗</span>
                </div>

                <div className="contact-hero-content">

                    <div className="contact-heading-wrap">
                        <h1 className="contact-heading">
                            Let's make
                            <br />
                            something
                            <br />
                            <span>worth talking</span>
                            <br />
                            about.
                        </h1>
                    </div>

                    <div className="contact-intro">
                        <span className="contact-intro-label">
                            HAVE A PROJECT IN MIND?
                        </span>

                        <p>
                            Tell us what you're building.
                            We’ll get back to you and figure
                            out the best way to move forward.
                        </p>
                    </div>

                </div>

            </section>


            {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

            <section className="contact-main">

                {/* =================================================
            FORM
        ================================================= */}

                <div className="contact-form-section">

                    <div className="contact-section-label">
                        <span>01</span>
                        <span>START A PROJECT</span>
                    </div>

                    {submitted ? (

                        <div className="contact-success">

                            <div className="success-number">
                                (✓)
                            </div>

                            <h2>
                                Thanks.
                                <br />
                                We'll be in touch.
                            </h2>

                            <p>
                                Your project enquiry has been received.
                                We'll get back to you as soon as possible.
                            </p>

                            <button
                                className="contact-reset"
                                onClick={() => setSubmitted(false)}
                            >
                                SEND ANOTHER INQUIRY ↗
                            </button>

                        </div>

                    ) : (

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* NAME */}

                            <div className="form-field">
                                <label htmlFor="name">
                                    NAME <span>*</span>
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Sachin Yadav"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            {/* EMAIL */}

                            <div className="form-field">
                                <label htmlFor="email">
                                    EMAIL ADDRESS <span>*</span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="hello@wordmarkagency.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            {/* COMPANY */}

                            <div className="form-field">
                                <label htmlFor="company">
                                    COMPANY / BRAND
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Your company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>


                            {/* PHONE */}

                            <div className="form-field">
                                <label htmlFor="phone">
                                    PHONE / WHATSAPP
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 75290 77801"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>


                            {/* SERVICE */}

                            <div className="form-field">

                                <label htmlFor="service">
                                    WHAT CAN WE HELP WITH? <span>*</span>
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select a service
                                    </option>

                                    <option value="Web Design">
                                        Web Design
                                    </option>

                                    <option value="Development">
                                        Development
                                    </option>

                                    <option value="E-Commerce">
                                        E-Commerce
                                    </option>

                                    <option value="AI & Automation">
                                        AI & Automation
                                    </option>

                                    <option value="Branding">
                                        Branding
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>

                            </div>


                            {/* BUDGET */}

                            <div className="form-field">

                                <label htmlFor="budget">
                                    PROJECT BUDGET
                                </label>

                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select your budget
                                    </option>

                                    <option value="₹25k - ₹50k">
                                        ₹25k — ₹50k
                                    </option>

                                    <option value="₹50k - ₹1L">
                                        ₹50k — ₹1L
                                    </option>

                                    <option value="₹1L - ₹3L">
                                        ₹1L — ₹3L
                                    </option>

                                    <option value="₹3L+">
                                        ₹3L+
                                    </option>

                                    <option value="Not sure">
                                        Not sure yet
                                    </option>
                                </select>

                            </div>


                            {/* TIMELINE */}

                            <div className="form-field">

                                <label htmlFor="timeline">
                                    WHEN DO YOU WANT TO START?
                                </label>

                                <select
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select timeline
                                    </option>

                                    <option value="ASAP">
                                        As soon as possible
                                    </option>

                                    <option value="1-2 weeks">
                                        Within 1–2 weeks
                                    </option>

                                    <option value="1 month">
                                        Within a month
                                    </option>

                                    <option value="1-3 months">
                                        1–3 months
                                    </option>

                                    <option value="Just exploring">
                                        Just exploring
                                    </option>
                                </select>

                            </div>


                            {/* MESSAGE */}

                            <div className="form-field form-message">

                                <label htmlFor="message">
                                    TELL US ABOUT YOUR PROJECT <span>*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="What are you looking to build?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* SUBMIT */}

                            <div className="form-submit-row">

                                <p>
                                    By submitting this form,
                                    you agree to be contacted
                                    regarding your project.
                                </p>

                                <button
                                    type="submit"
                                    className="submit-button"
                                >
                                    <span>SEND INQUIRY</span>
                                    <span>↗</span>
                                </button>

                            </div>

                        </form>

                    )}

                </div>


                {/* =================================================
            DIRECT CONTACT
        ================================================= */}

                <aside className="direct-contact">

                    <div className="contact-section-label">
                        <span>02</span>
                        <span>PREFER A DIRECT CONVERSATION?</span>
                    </div>

                    <div className="direct-contact-content">

                        <h2>
                            Let's talk
                            <br />
                            directly.
                        </h2>

                        <p>
                            Sometimes it's easier to talk.
                            Reach us directly or book a time
                            that works for you.
                        </p>


                        {/* PHONE */}

                        <a
                            href="tel:+917529077801"
                            className="direct-link"
                        >

                            <div>
                                <span className="direct-label">
                                    CALL
                                </span>

                                <span className="direct-value">
                                    +91 75290 77801
                                </span>
                            </div>

                            <span className="direct-arrow">
                                ↗
                            </span>

                        </a>


                        {/* WHATSAPP */}

                        <a
                            href="https://wa.me/917529077801"
                            target="_blank"
                            rel="noreferrer"
                            className="direct-link"
                        >

                            <div>
                                <span className="direct-label">
                                    WHATSAPP
                                </span>

                                <span className="direct-value">
                                    Start a conversation
                                </span>
                            </div>

                            <span className="direct-arrow">
                                ↗
                            </span>

                        </a>


                        {/* EMAIL */}

                        <a
                            href="mailto:hello@yourstudio.com"
                            className="direct-link"
                        >

                            <div>
                                <span className="direct-label">
                                    EMAIL
                                </span>

                                <span className="direct-value">
                                    hello@yourstudio.com
                                </span>
                            </div>

                            <span className="direct-arrow">
                                ↗
                            </span>

                        </a>


                        {/* BOOK CALL */}

                        <a
                            href="#book-call"
                            className="book-call"
                        >
                            <span>
                                BOOK A CALL
                            </span>

                            <span>
                                ↗
                            </span>
                        </a>

                    </div>

                </aside>

            </section>


            {/* =====================================================
          BOTTOM
      ===================================================== */}

            <section className="contact-bottom">

                <div>
                    YOURS
                    <br />
                    STUDIOS.
                </div>

                <div>
                    <span>©2025</span>
                    <span>ALL RIGHTS RESERVED</span>
                </div>

                <div>
                    LET'S BUILD
                    <br />
                    SOMETHING GOOD.
                </div>

            </section>

        </main>
    );
}