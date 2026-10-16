import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = titleRef.current.querySelectorAll(".cta-word");

      gsap.from(words, {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="cta-section"
    >
      <div className="cta-noise" />

      <div className="container cta-container">
        <div className="cta-top">
          <span className="cta-label">
            Have a project in mind?
          </span>

          <span className="cta-number">
            (06)
          </span>
        </div>

        <div ref={titleRef} className="cta-heading">
          <div className="cta-line">
            <div className="cta-mask">
              <span className="cta-word">LET'S</span>
            </div>
          </div>

          <div className="cta-line">
            <div className="cta-mask">
              <span className="cta-word cta-outline">
                BUILD
              </span>
            </div>
          </div>

          <div className="cta-line">
            <div className="cta-mask">
              <span className="cta-word">SOMETHING</span>
            </div>
          </div>

          <div className="cta-line">
            <div className="cta-mask">
              <span className="cta-word">REMARKABLE.</span>
            </div>
          </div>
        </div>

        <div className="cta-bottom">
          <p>
            Tell us what you're building,
            where you're stuck, or where
            you want to go.
          </p>

          <Link
            ref={buttonRef}
            to="/contact"
            href="mailto:hello@youragency.com"
            className="cta-button"
          >
            <span>Start a project</span>
            
              <span className="cta-button-icon">
                <ArrowUpRight size={20} />
              </span>
            
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;