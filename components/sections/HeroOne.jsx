import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function HeroOne() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const servicesRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleWords =
        gsap.utils.toArray(".hero-word");

      // --------------------------------
      // INITIAL STATES
      // --------------------------------

      gsap.set(titleWords, {
        yPercent: 120,
        opacity: 0,
        filter: "blur(18px)",
      });

      gsap.set(
        [
          eyebrowRef.current,
          servicesRef.current,
          bottomRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      // --------------------------------
      // HERO ENTRANCE
      // --------------------------------

      const intro = gsap.timeline({
        delay: 0.15,
      });

      intro.to(
        titleWords,
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",

          duration: 1.1,

          stagger: 0.09,

          ease: "power4.out",
        }
      );

      intro.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",
        },
        "-=0.7"
      );

      intro.to(
        servicesRef.current,
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",
        },
        "-=0.5"
      );

      intro.to(
        bottomRef.current,
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",
        },
        "-=0.4"
      );

      // --------------------------------
      // BACKGROUND MOVEMENT
      // --------------------------------

      gsap.fromTo(
        visualRef.current,
        {
          scale: 1.08,
        },
        {
          scale: 1,

          duration: 2.2,

          ease: "power3.out",
        }
      );

      // --------------------------------
      // SCROLL ANIMATION
      // --------------------------------

      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,

          start: "top top",

          end: "bottom top",

          scrub: 1,

          pin: false,

          invalidateOnRefresh: true,
        },
      })
        .to(
          visualRef.current,
          {
            scale: 1.15,
          },
          0
        )
        .to(
          titleRef.current,
          {
            yPercent: -18,
            scale: 0.92,
            filter: "blur(5px)",
          },
          0
        )
        .to(
          eyebrowRef.current,
          {
            y: -80,
            opacity: 0,
          },
          0
        )
        .to(
          servicesRef.current,
          {
            y: -100,
            opacity: 0,
          },
          0
        )
        .to(
          bottomRef.current,
          {
            y: 80,
            opacity: 0,
          },
          0
        );

      /* =================================
 HERO → WORK TRANSITION
================================= */

      gsap.to(heroRef.current, {
        scale: 0.94,
        borderRadius: "0 0 40px 40px",

        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,

          start: "70% top",
          end: "bottom top",

          scrub: true,
        },
      });

      gsap.to(visualRef.current, {
        filter: "blur(5px)",

        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,

          start: "65% top",
          end: "bottom top",

          scrub: true,
        },
      });

      // --------------------------------
      // MOUSE PARALLAX
      // --------------------------------

      const handleMouseMove = (event) => {
        const { innerWidth, innerHeight } =
          window;

        const x =
          (event.clientX / innerWidth - 0.5) *
          2;

        const y =
          (event.clientY / innerHeight - 0.5) *
          2;

        gsap.to(visualRef.current, {
          x: x * 10,
          y: y * 10,

          duration: 1.2,

          ease: "power3.out",

          overwrite: true,
        });

        gsap.to(titleRef.current, {
          x: x * -4,
          y: y * -3,

          duration: 1.2,

          ease: "power3.out",

          overwrite: true,
        });
      };

      window.addEventListener(
        "mousemove",
        handleMouseMove
      );

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
    >
      {/* BACKGROUND */}

      <div
        ref={visualRef}
        className="hero-visual"
      >
        <div className="hero-overlay" />

        {/* 
          Replace hero.mp4 with your actual
          agency background video.
        */}

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/Hero_poster.png"
        >
          <source
            src="/hero2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* TOP */}

      <div
        ref={eyebrowRef}
        className="hero-eyebrow"
      >
        <span>
          Independent digital studio
        </span>

        <span>
          India / Worldwide
        </span>
      </div>

      {/* MAIN */}

      <div className="hero-main container">
        <div
          ref={titleRef}
          className="hero-title"
        >
          <div className="hero-line">
            <span className="hero-mask">
              <span className="hero-word">
                WE
              </span>
            </span>

            <span className="hero-mask">
              <span className="hero-word">
                BUILD
              </span>
            </span>
          </div>

          <div className="hero-line">
            <span className="hero-mask">
              <span className="hero-word">
                DIGITAL
              </span>
            </span>
          </div>

          <div className="hero-line">
            <span className="hero-mask">
              <span className="hero-word">
                EXPERIENCES.
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* SERVICES */}

      <div
        ref={servicesRef}
        className="hero-services"
      >
        <span className="hero-services-label">
          What we do
        </span>

        <div>
          <span>Web Design</span>
          <span>Development</span>
          <span>AI & Automation</span>
          <span>Digital Growth</span>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        ref={bottomRef}
        className="hero-bottom"
      >
        <div>
          <span className="hero-bottom-number">
            01
          </span>

          <span>
            Scroll to explore
          </span>
        </div>

        <div className="hero-scroll">
          <ArrowDownRight size={18} />
        </div>

        <a href="#work">
          Explore work
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

export default HeroOne;