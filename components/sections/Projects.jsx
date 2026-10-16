import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitText from "../animations/SplitText";
import BlurReveal from "../animations/BlurReveal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "ThreadsRepublic",
    category: "E-commerce / Development",
    description:
      "A conversion-focused fashion commerce experience.",
    image:
      "/projects/threads-republic.jpg",
  },

  {
    number: "02",
    title: "Samrat Mills",
    category: "Industrial / Web Design",
    description:
      "A modern digital presence for a textile manufacturer.",
    image:
      "/projects/samrat-mills.jpg",
  },

  {
    number: "03",
    title: "Yoga Platform",
    category: "SaaS / Development",
    description:
      "A digital platform designed for yoga businesses.",
    image:
      "/projects/yoga.jpg",
  },

  {
    number: "04",
    title: "Retail Community",
    category: "Lead Generation / Development",
    description:
      "A conversion-focused community acquisition platform.",
    image:
      "/projects/retail-community.jpg",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        const image = card.querySelector(
          ".project-image"
        );

        gsap.fromTo(
          image,
          {
            scale: 1.15,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="projects-section"
    >
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            Selected work
          </span>

          <span className="section-index">
            (01)
          </span>
        </div>

        <SplitText
          text="Projects."
          className="projects-title"
        />

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-meta">

                <span className="project-number">
                  {project.number}
                </span>

                <div>
                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.category}
                  </p>
                </div>

                <ArrowUpRight
                  className="project-arrow"
                  size={20}
                />
              </div>

              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-hover">
                  <span>
                    View project
                  </span>

                  <ArrowUpRight size={20} />
                </div>
              </div>

              <BlurReveal className="project-description">
                {project.description}
              </BlurReveal>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;