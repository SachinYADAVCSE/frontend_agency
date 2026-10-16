import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Strategy-led websites designed around your brand, audience and business goals.",
    tags: ["UX / UI", "Creative Direction", "Websites"],
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast, responsive and scalable websites and web applications built with modern technology.",
    tags: ["React", "Node.js", "Custom Systems"],
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "High-converting commerce experiences designed to make products easier to discover and buy.",
    tags: ["Shopify", "Custom Stores", "Conversion"],
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Custom automation systems that remove repetitive work and help businesses operate smarter.",
    tags: ["AI", "Automation", "Integrations"],
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================================
         HEADING
      ================================= */

      const headingWords =
        sectionRef.current.querySelectorAll(
          ".services-heading-word"
        );

      gsap.set(headingWords, {
        y: 90,
        opacity: 0,
        filter: "blur(14px)",
      });

      gsap.to(headingWords, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
        },
      });

      /* ================================
         TOP LINE
      ================================= */

      gsap.fromTo(
        ".services-top-line",
        {
          scaleX: 0,
          transformOrigin: "left",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power4.inOut",

          scrollTrigger: {
            trigger: ".services-top-line",
            start: "top 85%",
          },
        }
      );

      /* ================================
         SERVICE ROWS
      ================================= */

      const rows =
        gsap.utils.toArray(".service-row");

      rows.forEach((row, index) => {
        const number =
          row.querySelector(".service-number");

        const title =
          row.querySelector(".service-title");

        const description =
          row.querySelector(".service-description");

        const tags =
          row.querySelector(".service-tags");

        const arrow =
          row.querySelector(".service-arrow");

        const line =
          row.querySelector(".service-line");

        gsap.set(
          [
            number,
            title,
            description,
            tags,
            arrow,
          ],
          {
            y: 50,
            opacity: 0,
          }
        );

        gsap.to(
          [
            number,
            title,
            description,
            tags,
            arrow,
          ],
          {
            y: 0,
            opacity: 1,

            duration: 0.8,

            stagger: 0.04,

            ease: "power3.out",

            scrollTrigger: {
              trigger: row,

              start: "top 88%",
            },
          }
        );

        gsap.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left",
          },
          {
            scaleX: 1,

            duration: 1,

            ease: "power4.inOut",

            scrollTrigger: {
              trigger: row,

              start: "top 90%",
            },
          }
        );

        /* ================================
           HOVER
        ================================= */

        const hoverIn = () => {
          gsap.to(row, {
            paddingLeft: 18,
            paddingRight: 18,

            duration: 0.5,

            ease: "power3.out",
          });

          gsap.to(title, {
            x: 10,

            duration: 0.5,

            ease: "power3.out",
          });

          gsap.to(arrow, {
            rotation: 45,
            scale: 1.1,

            duration: 0.4,

            ease: "power3.out",
          });

          gsap.to(description, {
            opacity: 1,
            x: 0,

            duration: 0.4,
          });
        };

        const hoverOut = () => {
          gsap.to(row, {
            paddingLeft: 0,
            paddingRight: 0,

            duration: 0.5,

            ease: "power3.out",
          });

          gsap.to(title, {
            x: 0,

            duration: 0.5,

            ease: "power3.out",
          });

          gsap.to(arrow, {
            rotation: 0,
            scale: 1,

            duration: 0.4,

            ease: "power3.out",
          });
        };

        row.addEventListener(
          "mouseenter",
          hoverIn
        );

        row.addEventListener(
          "mouseleave",
          hoverOut
        );

        return () => {
          row.removeEventListener(
            "mouseenter",
            hoverIn
          );

          row.removeEventListener(
            "mouseleave",
            hoverOut
          );
        };
      });

      /* ================================
         BACKGROUND PARALLAX
      ================================= */

      gsap.to(".services-bg-word", {
        xPercent: -15,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top bottom",
          end: "bottom top",

          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section"
      id="services"
    >
      <div
        className="services-bg-word"
        aria-hidden="true"
      >
        SERVICES
      </div>

      <div className="services-container">
        {/* HEADER */}

        <div className="services-top">
          <span>(004)</span>

          <span>Capabilities</span>

          <span>What we do</span>
        </div>

        <div className="services-top-line" />

        <div className="services-heading">
          <h2>
            <span className="services-heading-word">
              What
            </span>

            <span className="services-heading-word">
              we
            </span>

            <span className="services-heading-word services-muted">
              do.
            </span>
          </h2>

          <p>
            From the first idea to the final
            interaction, we build digital
            experiences around the way your
            business actually works.
          </p>
        </div>

        {/* SERVICES */}

        <div className="services-list">
          {services.map((service) => (
            <div
              className="service-row"
              key={service.number}
            >
              <div className="service-main">
                <span className="service-number">
                  {service.number}
                </span>

                <h3 className="service-title">
                  {service.title}
                </h3>
              </div>

              <div className="service-content">
                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-action">
                <div className="service-arrow">
                  <ArrowUpRight size={21} />
                </div>

                <Plus
                  className="service-plus"
                  size={17}
                />
              </div>

              <div className="service-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;