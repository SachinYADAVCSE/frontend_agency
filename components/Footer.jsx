
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const location = useLocation();

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const footer = footerRef.current;
    const brand = brandRef.current;

    if (!footer || !brand) return;

    let refreshFrame;

    const ctx = gsap.context(() => {
      const content = footer.querySelectorAll(".footer-animate");

      // Reset any styles left by a previous route.
      gsap.set([brand, ...content], {
        clearProps: "opacity,visibility,transform,filter",
      });

      // Brand reveal.
      gsap.fromTo(
        brand,
        {
          y: 100,
          autoAlpha: 0,
          filter: "blur(12px)",
          immediateRender: false,
        },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: footer,
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );

      // Footer content reveal.
      gsap.fromTo(
        content,
        {
          y: 25,
          autoAlpha: 0,
          immediateRender: false,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );

      // Recalculate trigger positions after the new route renders.
      refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, footer);

    return () => {
      if (refreshFrame) {
        cancelAnimationFrame(refreshFrame);
      }

      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-main">
        <div className="footer-markers" aria-hidden="true">
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>

        <div className="footer-content">
          {/* Contact */}
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

            <a href="/contact" className="footer-book">
              Book a call
              <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-column footer-animate">
            <div className="footer-eyebrow">Navigation</div>
            <a href="/#home" className="footer-nav-link">Home</a>
            <a href="/#work" className="footer-nav-link">Work</a>
            <a href="/#services" className="footer-nav-link">Services</a>
            <a href="/contact" className="footer-nav-link">Contact</a>
          </div>

          {/* Social */}
          <div className="footer-column footer-animate">
            <div className="footer-eyebrow">Social</div>
            <a
              href="https://instagram.com/"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://x.com/"
              className="footer-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Legal */}
          <div className="footer-column footer-animate">
            <div className="footer-eyebrow">Legal</div>
            <a href="/privacy-policy" className="footer-nav-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-nav-link">
              Terms
            </a>
            <a href="/cookies" className="footer-nav-link">
              Cookies
            </a>
          </div>
        </div>

        {/* Brand */}
        <div className="footer-brand-wrapper">
          <div className="footer-brand" ref={brandRef}>
            YOUR<span>AGENCY</span><sup>®</sup>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Your Agency</div>
          <div>India — Worldwide</div>

          <button
            className="footer-top"
            type="button"
            onClick={handleTop}
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
