import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const stats = [
    {
      number: 100,
      suffix: "%",
      label: "Custom built",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Digital presence",
    },
    {
      number: 3,
      suffix: "+",
      label: "Core disciplines",
    },
    {
      number: 1,
      suffix: "",
      label: "Goal — business growth",
    },
  ];

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      /* --------------------------------
         HEADING REVEAL
      -------------------------------- */

      const headingWords =
        section.querySelectorAll(".stats-word");

      gsap.set(headingWords, {
        y: 100,
        opacity: 0,
        filter: "blur(15px)",
      });

      gsap.to(headingWords, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",

        duration: 1.1,

        stagger: 0.1,

        ease: "power4.out",

        scrollTrigger: {
          trigger: section,

          start: "top 70%",
        },
      });

      /* --------------------------------
         TOP LINE
      -------------------------------- */

      gsap.fromTo(
        ".stats-line",
        {
          scaleX: 0,
          transformOrigin: "left",
        },
        {
          scaleX: 1,

          duration: 1.2,

          ease: "power4.inOut",

          scrollTrigger: {
            trigger: ".stats-line",

            start: "top 85%",
          },
        }
      );

      /* --------------------------------
         STAT ITEMS
      -------------------------------- */

      const items =
        gsap.utils.toArray(".stat-item");

      items.forEach((item, index) => {
        const number =
          item.querySelector(".stat-number");

        const value =
          Number(number.dataset.value);

        const suffix =
          number.dataset.suffix || "";

        const counter = {
          value: 0,
        };

        /* Initial state */

        gsap.set(item, {
          y: 80,
          opacity: 0,
          filter: "blur(10px)",
        });

        /* Reveal */

        gsap.to(item, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",

          duration: 0.9,

          delay: index * 0.08,

          ease: "power4.out",

          scrollTrigger: {
            trigger: item,

            start: "top 85%",
          },
        });

        /* Counter */

        gsap.to(counter, {
          value,

          duration: 1.8,

          ease: "power2.out",

          onUpdate: () => {
            number.textContent =
              Math.floor(counter.value) +
              suffix;
          },

          scrollTrigger: {
            trigger: item,

            start: "top 80%",

            once: true,
          },
        });
      });

      /* --------------------------------
         BACKGROUND PARALLAX
      -------------------------------- */

      gsap.to(".stats-background-text", {
        xPercent: -15,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: true,
        },
      });

      /* --------------------------------
         BOTTOM LINE
      -------------------------------- */

      gsap.fromTo(
        ".stats-bottom-line",
        {
          scaleX: 0,
          transformOrigin: "left",
        },
        {
          scaleX: 1,

          duration: 1.2,

          ease: "power4.inOut",

          scrollTrigger: {
            trigger: ".stats-bottom-line",

            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section"
    >
      {/* --------------------------------
          GIANT BACKGROUND TEXT
      -------------------------------- */}

      <div
        className="stats-background-text"
        aria-hidden="true"
      >
        RESULTS
      </div>

      <div className="stats-container">
        {/* --------------------------------
            HEADER
        -------------------------------- */}

        <div className="stats-top">
          <span>(003)</span>

          <span>Our numbers</span>

          <span>What we've built</span>
        </div>

        <div className="stats-line" />

        <div className="stats-heading">
          <h2>
            <span className="stats-word">
              Small
            </span>

            <span className="stats-word">
              team.
            </span>

            <br />

            <span className="stats-word stats-muted">
              Big
            </span>

            <span className="stats-word">
              impact.
            </span>
          </h2>

          <p>
            We combine strategy, design and
            technology to create digital
            experiences that actually move
            businesses forward.
          </p>
        </div>

        {/* --------------------------------
            NUMBERS
        -------------------------------- */}

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className="stat-item"
              key={stat.label}
            >
              <div className="stat-index">
                0{index + 1}
              </div>

              <div
                className="stat-number"
                data-value={stat.number}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="stats-bottom-line" />
      </div>
    </section>
  );
}

export default Stats;