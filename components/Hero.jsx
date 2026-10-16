import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const featuredProject = {
    number: "01",
    title: "THREADSREPUBLIC",
    type: "E-COMMERCE",
    image: "/projects/threadsrepublic.jpg",
    href: "#work",
};

export default function Hero() {
    const heroRef = useRef(null);

    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const metaRef = useRef(null);

    const projectCardRef = useRef(null);
    const projectCardImageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const titleLines =
                titleRef.current?.querySelectorAll(
                    ".hero-line"
                );

            /*
            ============================================
            INITIAL STATES
            ============================================
            */

            gsap.set(imageRef.current, {
                scale: 1.14,
                opacity: 0,
                filter: "blur(8px)",
            });

            gsap.set(titleLines, {
                yPercent: 115,
                opacity: 0,
            });

            gsap.set(subtitleRef.current, {
                y: 25,
                opacity: 0,
            });

            gsap.set(metaRef.current, {
                y: 20,
                opacity: 0,
            });

            gsap.set(projectCardRef.current, {
                y: 45,
                opacity: 0,
                scale: 0.92,
                filter: "blur(10px)",
            });

            gsap.set(projectCardImageRef.current, {
                scale: 1.14,
            });

            /*
            ============================================
            HERO ENTRANCE
            ============================================
            */

            const entrance = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            entrance
                /*
                Background
                */
                .to(imageRef.current, {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.5,
                })

                /*
                Main title
                */
                .to(
                    titleLines,
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.15,
                        stagger: 0.09,
                    },
                    "-=0.85"
                )

                /*
                Subtitle
                */
                .to(
                    subtitleRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                    },
                    "-=0.7"
                )

                /*
                Metadata
                */
                .to(
                    metaRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                    },
                    "-=0.5"
                )

                /*
                Featured project card
                */
                .to(
                    projectCardRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.45"
                );

            /*
            IMPORTANT:
            Remove any permanent filter after entrance.
            */

            entrance.set(imageRef.current, {
                clearProps: "filter",
            });

            /*
            ============================================
            HERO IMAGE PARALLAX
            ============================================
            */

            gsap.to(imageRef.current, {
                scale: 1.09,
                yPercent: 8,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "top top",
                    end: "bottom top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            TITLE SCROLL MOVEMENT
            ============================================
            */

            gsap.to(titleRef.current, {
                yPercent: -18,
                opacity: 0.78,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "top top",
                    end: "bottom top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            SUBTITLE EXITS EARLIER
            ============================================
            */

            gsap.to(subtitleRef.current, {
                y: -35,
                opacity: 0,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "35% top",
                    end: "75% top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            HERO OVERLAY BECOMES SLIGHTLY DARKER
            ============================================
            */

            gsap.to(".hero-image-overlay", {
                opacity: 0.48,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "25% top",
                    end: "bottom top",

                    scrub: 1,
                },
            });

            /*
            ============================================
            HERO SCALE / SECTION TRANSITION
            ============================================
            */

            gsap.to(heroRef.current, {
                scale: 0.96,

                borderRadius:
                    "0 0 32px 32px",

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "72% top",
                    end: "bottom top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            FEATURED CARD IMAGE PARALLAX
            ============================================
            */

            gsap.to(projectCardImageRef.current, {
                scale: 1,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "top top",
                    end: "bottom top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            FEATURED CARD EXITS WITH HERO
            ============================================
            */

            gsap.to(projectCardRef.current, {
                y: 80,
                opacity: 0,
                scale: 0.88,
                filter: "blur(8px)",

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "35% top",
                    end: "85% top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
            ============================================
            REFRESH
            ============================================
            */

            ScrollTrigger.refresh();
        }, heroRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero"
            data-nav-theme="dark"
        >
            {/* ==========================================
                BACKGROUND
            ========================================== */}

            <div className="hero-background">
                <img
                    ref={imageRef}
                    className="hero-image"
                    src="/images/hero-plane.jpg"
                    alt=""
                />

                <div className="hero-image-overlay" />

                <div className="hero-gradient" />

                <div className="hero-noise" />
            </div>

            {/* ==========================================
                MAIN CONTENT
            ========================================== */}

            <div className="hero-content">

                <div
                    ref={titleRef}
                    className="hero-title"
                >
                    <div className="hero-line-wrap">
                        <span className="hero-line">
                            WE BUILD
                        </span>
                    </div>

                    <div className="hero-line-wrap">
                        <span className="hero-line">
                            DIGITAL
                        </span>
                    </div>

                    <div
                        className="
                            hero-line-wrap
                            hero-line-last
                        "
                    >
                        <span className="hero-line">
                            EXPERIENCES.
                        </span>
                    </div>
                </div>

                <div
                    ref={subtitleRef}
                    className="hero-subtitle"
                >
                    <span>
                        Websites, digital products
                        <br />
                        and intelligent systems.
                    </span>
                </div>
            </div>

            {/* ==========================================
                FEATURED PROJECT CARD
            ========================================== */}

            <a
                ref={projectCardRef}
                href={featuredProject.href}
                className="hero-project-card"
                aria-label={`View ${featuredProject.title}`}
            >
                <div className="hero-project-card-image-wrap">

                    <img
                        ref={projectCardImageRef}
                        className="
                            hero-project-card-image
                        "
                        src={featuredProject.image}
                        alt=""
                    />

                    <div className="hero-project-card-overlay" />

                    <span className="hero-project-card-index">
                        {featuredProject.number}
                    </span>

                    <span className="hero-project-card-arrow">
                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                        />
                    </span>
                </div>

                <div className="hero-project-card-info">

                    <div className="hero-project-card-main">

                        <span className="hero-project-card-title">
                            {featuredProject.title}
                        </span>

                        <span className="hero-project-card-type">
                            {featuredProject.type}
                        </span>

                    </div>

                    <span className="hero-project-card-view">
                        VIEW PROJECT
                    </span>

                </div>
            </a>

            {/* ==========================================
                HERO META
            ========================================== */}

            <div
                ref={metaRef}
                className="hero-meta"
            >
                <div className="hero-meta-left">

                    <span className="hero-meta-number">
                        001
                    </span>

                    <span>
                        DIGITAL STUDIO
                    </span>

                </div>

                <div className="hero-meta-center">

                    <span>
                        WEB DESIGN
                    </span>

                    <span>
                        DEVELOPMENT
                    </span>

                    <span>
                        AI & AUTOMATION
                    </span>

                </div>

                <div className="hero-meta-right">

                    <span className="hero-scroll-dot" />

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <span className="hero-scroll-arrow">
                        ↓
                    </span>

                </div>
            </div>
        </section>
    );
}