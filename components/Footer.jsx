import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const topButtonRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const brand = brandRef.current;

    if (!footer || !brand) return;

    const ctx = gsap.context(() => {
      /* =================================
         BRAND REVEAL
      ================================= */

      gsap.fromTo(
        brand,
        {
          y: 120,
          opacity: 0,
          filter: "blur(15px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =================================
         FOOTER CONTENT
      ================================= */

      gsap.fromTo(
        footer.querySelectorAll(".footer-animate"),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =================================
         BACK TO TOP
      ================================= */

      const handleTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      topButtonRef.current?.addEventListener(
        "click",
        handleTop
      );

      return () => {
        topButtonRef.current?.removeEventListener(
          "click",
          handleTop
        );
      };
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* =================================
          MAIN FOOTER
      ================================= */}

      <div className="footer-main">

        {/* TOP MARKERS */}

        <div className="footer-markers">
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>

        {/* =================================
            TOP GRID
        ================================= */}

        <div className="footer-content">

          {/* CONTACT */}

          <div className="footer-contact footer-animate">

            <div className="footer-eyebrow">
              (006) Let's connect
            </div>

            <div className="footer-email-wrapper">
              <a
                href="mailto:hello@example.com"
                className="footer-email"
              >
                hello@example.com
                <ArrowUpRight
                  className="footer-email-arrow"
                  size={28}
                  strokeWidth={1.4}
                />
              </a>
            </div>

            <a
              href="/contact"
              className="footer-book"
            >
              Book a call
              <ArrowUpRight size={20} />
            </a>

          </div>

          {/* NAVIGATION */}

          <div className="footer-column footer-animate">

            <div className="footer-eyebrow">
              Navigation
            </div>

            <a href="#home" className="footer-nav-link">
              Home
            </a>

            <a href="#work" className="footer-nav-link">
              Work
            </a>

            <a href="#services" className="footer-nav-link">
              Services
            </a>

            <a href="#contact" className="footer-nav-link">
              Contact
            </a>

          </div>

          {/* SOCIAL */}

          <div className="footer-column footer-animate">

            <div className="footer-eyebrow">
              Social
            </div>

            <a
              href="#"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
              <ArrowUpRight size={14} />
            </a>

          </div>

          {/* LEGAL */}

          <div className="footer-column footer-animate">

            <div className="footer-eyebrow">
              Legal
            </div>

            <a href="#" className="footer-nav-link">
              Privacy Policy
            </a>

            <a href="#" className="footer-nav-link">
              Terms
            </a>

            <a href="#" className="footer-nav-link">
              Cookies
            </a>

          </div>

        </div>

        {/* =================================
            HUGE BRAND
        ================================= */}

        <div className="footer-brand-wrapper">

          <div
            className="footer-brand"
            ref={brandRef}
          >
            YOUR
            <span>AGENCY</span>
            <sup>®</sup>
          </div>

        </div>

        {/* =================================
            BOTTOM BAR
        ================================= */}

        <div className="footer-bottom">

          <div>
            © {new Date().getFullYear()} Your Agency
          </div>

          <div>
            India — Worldwide
          </div>

          <button
            className="footer-top"
            ref={topButtonRef}
          >
            Back to top
            <ArrowUp size={14} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;