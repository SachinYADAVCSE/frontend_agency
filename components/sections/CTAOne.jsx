import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonInnerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const button = buttonRef.current;
    const buttonInner = buttonInnerRef.current;
    const glow = glowRef.current;

    if (!section || !heading || !button) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         HEADING REVEAL
      -------------------------------- */

      gsap.fromTo(
        heading.querySelectorAll(".cta-line"),
        {
          y: 100,
          opacity: 0,
          filter: "blur(14px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* --------------------------------
         BUTTON REVEAL
      -------------------------------- */

      gsap.fromTo(
        button,
        {
          scale: 0.7,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          delay: 0.35,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* --------------------------------
         BACKGROUND GLOW
      -------------------------------- */

      gsap.to(glow, {
        x: 120,
        y: -80,
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* --------------------------------
         MAGNETIC BUTTON
      -------------------------------- */

      const moveX = gsap.quickTo(buttonInner, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(buttonInner, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const rotate = gsap.quickTo(buttonInner, "rotation", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);

        if (distance < 180) {
          moveX(x * 0.18);
          moveY(y * 0.18);
          rotate(x * 0.04);
        }
      };

      const handleMouseLeave = () => {
        moveX(0);
        moveY(0);
        rotate(0);
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      /* --------------------------------
         BUTTON HOVER
      -------------------------------- */

      const handleEnter = () => {
        gsap.to(button, {
          scale: 1.08,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(buttonInner, {
          scale: 1.05,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const handleLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(buttonInner, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      {/* Ambient glow */}
      <div className="cta-glow" ref={glowRef} />

      {/* Giant background text */}
      <div className="cta-background-text">LET'S TALK</div>

      <div className="cta-content">
        <div className="cta-meta">
          <span>(005)</span>
          <span>Start a project</span>
        </div>

        <div className="cta-heading" ref={headingRef}>
          <div className="cta-line">Have a project</div>
          <div className="cta-line cta-heading-offset">
            in mind?
          </div>
          <div className="cta-line">Let's build it.</div>
        </div>

        <div className="cta-bottom">
          <div className="cta-description">
            <p>
              Have an idea, a business that needs a better digital
              presence, or a system that needs to be built?
            </p>

            <p>
              Let's turn it into something useful.
            </p>
          </div>

          <a
            href="mailto:hello@example.com"
            className="cta-button"
            ref={buttonRef}
          >
            <div className="cta-button-inner" ref={buttonInnerRef}>
              <span>START</span>
              <span>A PROJECT</span>

              <div className="cta-button-arrow">
                <ArrowUpRight size={28} strokeWidth={1.5} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;