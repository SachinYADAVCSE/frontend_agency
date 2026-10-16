import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        number: "01",
        title: "ThreadsRepublic",
        type: "E-Commerce",
        description:
            "A conversion-focused fashion e-commerce experience built for modern fitness and lifestyle customers.",
        image: "/projects/threadsrepublic.jpg",
        tags: ["Web Design", "Development", "E-Commerce"],
    },
    {
        number: "02",
        title: "Samrat Mills",
        type: "Manufacturing",
        description:
            "A premium digital presence for a textile manufacturer focused on product presentation and business inquiries.",
        image: "/projects/samrat-mills.jpg",
        tags: ["Web Design", "Development", "B2B"],
    },
    {
        number: "03",
        title: "Retailers Club",
        type: "Community",
        description:
            "A mobile-first lead generation experience connecting clothing manufacturers with retailers.",
        image: "/projects/retailers-club.jpg",
        tags: ["Landing Page", "Lead Generation", "Payments"],
    },
    {
        number: "04",
        title: "Yoga Platform",
        type: "SaaS",
        description:
            "A digital platform for yoga instructors to sell courses, manage students and grow their business.",
        image: "/projects/yoga-platform.jpg",
        tags: ["SaaS", "Development", "Payments"],
    },
];

function SelectedWork() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");

            cards.forEach((card, index) => {
                const image = card.querySelector(
                    ".project-image"
                );

                const imageWrap = card.querySelector(
                    ".project-image-wrap"
                );

                const title = card.querySelector(
                    ".project-title"
                );

                const meta = card.querySelector(
                    ".project-meta"
                );

                const description = card.querySelector(
                    ".project-description"
                );

                const tags = card.querySelector(
                    ".project-tags"
                );

                const number = card.querySelector(
                    ".project-number"
                );

                /*
                 * Initial state
                 */

                gsap.set(image, {
                    scale: 1.18,
                    filter: "blur(8px)",
                });

                gsap.set(title, {
                    y: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                });

                gsap.set(
                    [
                        meta,
                        description,
                        tags,
                        number,
                    ],
                    {
                        y: 30,
                        opacity: 0,
                    }
                );

                /*
                 * Project reveal
                 */

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,

                        start: "top 75%",
                        end: "top 20%",

                        scrub: 1,

                        invalidateOnRefresh: true,
                    },
                });

                tl.to(
                    image,
                    {
                        scale: 1,
                        filter: "blur(0px)",

                        ease: "none",
                    },
                    0
                );

                tl.to(
                    title,
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",

                        ease: "power3.out",
                    },
                    0.05
                );

                tl.to(
                    meta,
                    {
                        y: 0,
                        opacity: 1,

                        ease: "power3.out",
                    },
                    0.12
                );

                tl.to(
                    description,
                    {
                        y: 0,
                        opacity: 1,

                        ease: "power3.out",
                    },
                    0.17
                );

                tl.to(
                    tags,
                    {
                        y: 0,
                        opacity: 1,

                        ease: "power3.out",
                    },
                    0.2
                );

                tl.to(
                    number,
                    {
                        y: 0,
                        opacity: 1,

                        ease: "power3.out",
                    },
                    0.15
                );

                /*
                 * Image parallax
                 */

                gsap.to(image, {
                    yPercent: -8,

                    ease: "none",

                    scrollTrigger: {
                        trigger: imageWrap,

                        start: "top bottom",
                        end: "bottom top",

                        scrub: true,
                    },
                });

                /*
                 * Slight image movement
                 */

                gsap.to(imageWrap, {
                    y: index % 2 === 0 ? -20 : 20,

                    ease: "none",

                    scrollTrigger: {
                        trigger: card,

                        start: "top bottom",
                        end: "bottom top",

                        scrub: true,
                    },
                });
            });

            /*
             * Section heading
             */

            const heading = sectionRef.current.querySelector(
                ".work-heading"
            );

            const headingWords =
                sectionRef.current.querySelectorAll(
                    ".work-heading-word"
                );

            gsap.set(headingWords, {
                y: 80,
                opacity: 0,
                filter: "blur(12px)",
            });

            gsap.to(headingWords, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",

                duration: 1,

                stagger: 0.08,

                ease: "power4.out",

                scrollTrigger: {
                    trigger: heading,

                    start: "top 85%",
                },
            });

            /*
             * Work section intro line
             */

            gsap.fromTo(
                ".work-intro-line",
                {
                    scaleX: 0,
                    transformOrigin: "left",
                },
                {
                    scaleX: 1,

                    duration: 1.2,

                    ease: "power4.inOut",

                    scrollTrigger: {
                        trigger: ".work-intro-line",

                        start: "top 90%",
                    },
                }
            );
        }, sectionRef);


        /* =================================
       WORK → STATS TRANSITION
    ================================= */

        const workSection =
            sectionRef.current;

        gsap.to(workSection, {
            scale: 0.97,

            borderRadius:
                "0 0 50px 50px",

            ease: "none",

            scrollTrigger: {
                trigger: workSection,

                start: "bottom 100%",
                end: "bottom 60%",

                scrub: true,
            },
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="selected-work"
        >
            {/* =================================
          SECTION INTRO
      ================================= */}

            <div className="work-header">
                <div className="work-header-top">
                    <span>(002)</span>

                    <span>Selected work</span>

                    <span>2024 — 2026</span>
                </div>

                <div className="work-intro-line" />

                <h2 className="work-heading">
                    <span className="work-heading-word">
                        Selected
                    </span>

                    <span className="work-heading-word">
                        work.
                    </span>
                </h2>

                <div className="work-header-bottom">
                    <p>
                        Digital experiences built to make
                        businesses look better, work
                        better and grow.
                    </p>

                    <span>
                        Scroll to explore
                    </span>
                </div>
            </div>

            {/* =================================
          PROJECTS
      ================================= */}

            <div className="projects-list">
                {projects.map((project) => (
                    <article
                        className="project-card"
                        key={project.number}
                    >
                        {/* IMAGE */}

                        <div className="project-image-wrap">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />

                            <div className="project-image-overlay" />

                            <div className="project-number">
                                {project.number}
                            </div>

                            <a
                                href="#"
                                className="project-open"
                                aria-label={`View ${project.title}`}
                            >
                                <ArrowUpRight size={20} />
                            </a>
                        </div>

                        {/* CONTENT */}

                        <div className="project-info">
                            <div className="project-meta">
                                <span>
                                    {project.type}
                                </span>

                                <span>
                                    / {project.number}
                                </span>
                            </div>

                            <h3 className="project-title">
                                {project.title}
                            </h3>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SelectedWork;