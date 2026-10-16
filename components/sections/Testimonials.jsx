import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        quote:
            "Working with the team made the entire process much easier. We finally had a website that clearly communicates what we actually do.",
        name: "Sanjay",
        company: "RB knit exports",
        image: "/testimonials/client_image.png",
    },

    {
        id: 2,
        quote:
            "The new website gave our brand a completely different presence online. It feels much more professional and is far easier for customers to navigate.",
        name: "Clark kegley",
        company: "clarksaas",
        image: "/testimonials/client_image_2.png",
    },

    {
        id: 3,
        quote:
            "From the initial idea to the final product, everything was focused on making the experience better for our customers.",
        name: "Mohit agerwal",
        company: "RapidX Softwares",
        image: "/testimonials/client_image_3.png",
    },

    {
        id: 4,
        quote:
            "We needed something simple, modern and built around the business. The final result gave us exactly that.",
        name: "Samrat Shah",
        company: "Samrat Mills",
        image: "/testimonials/samratmills_logo.jpg",
    },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean);

            /* ==========================================
               INTRO
               STAYS PINNED WHILE TESTIMONIALS MOVE
            ========================================== */

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
            
                pin: contentRef.current,
            
                pinSpacing: false,
            
                anticipatePin: 1,
            
                invalidateOnRefresh: true,
            });


            /* ==========================================
               INTRO ENTRANCE
            ========================================== */

            gsap.fromTo(
                ".testimonials-intro-inner > *",
                {
                    y: 70,
                    opacity: 0,
                    filter: "blur(15px)",
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.12,
                    ease: "power4.out",

                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                        once: true,
                    },
                }
            );


            /* ==========================================
               CARDS
            ========================================== */

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y: 180,
                        x: 80,
                        opacity: 0,
                        scale: 0.88,
                        filter: "blur(15px)",
                    },
                    {
                        y: 0,
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.2,
                        ease: "power4.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 55%",
                            scrub: 1,
                        },
                    }
                );
            });


            /* ==========================================
               CARDS MOVE WITH SCROLL
            ========================================== */

            gsap.to(".testimonial-card-1", {
                y: -35,

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.2,
                },
            });


            gsap.to(".testimonial-card-2", {
                y: -15,

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.2,
                },
            });


            gsap.to(".testimonial-card-3", {
                y: 20,

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.2,
                },
            });


            gsap.to(".testimonial-card-4", {
                y: 40,

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.2,
                },
            });


   

           

            gsap.to(".testimonials-cloud-image", {
                scale: 1.08,
                yPercent: -5,
                ease: "none",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });


            /* ==========================================
               HUGE TRUST TEXT
            ========================================== */

            gsap.to(".testimonials-background-word", {
                yPercent: -25,

                ease: "none",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="testimonials-section"
        >


            {/* ========================================
                    PINNED CONTENT
                ======================================== */}

            <div
                ref={contentRef}
                className="testimonials-pinned"
            >


                <div className="testimonials-background">
                    <img
                        className="testimonials-cloud-image"
                        src="/images/testimonials-clouds.jpg"
                        alt=""
                    />

                    <div className="testimonials-overlay" />
                    <div className="testimonials-noise" />
                </div>


                

                    {/* ======================================
                            LEFT / TOP LEFT
                        ====================================== */}

                <div className="testimonials-intro">

                    <div className="testimonials-intro-inner">

                        <span className="testimonials-label">
                            <span className="label-dot" />
                            TESTIMONIALS
                        </span>

                        <h2>
                            DON'T TAKE
                            <br />
                            OUR WORD
                            <br />
                            FOR IT
                        </h2>

                        <p>
                            The work speaks for itself.
                            <br />
                            Here's what our clients have to say.
                        </p>

                    </div>

                </div>


                {/* ======================================
            RIGHT SIDE CARDS
        ====================================== */}

                <div className="testimonials-cards">

                    {testimonials.map((testimonial, index) => (
                        <article
                            key={testimonial.id}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className={`testimonial-card testimonial-card-${testimonial.id}`}
                        >

                            <p className="testimonial-quote">
                                “{testimonial.quote}”
                            </p>


                            <div className="testimonial-client">

                                <div className="testimonial-avatar">

                                    {testimonial.image ? (
                                        <img
                                            src={testimonial.image}
                                            alt=""
                                        />
                                    ) : (
                                        <span>
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    )}

                                </div>

                                <div className="testimonial-client-info">

                                    <strong>
                                        {testimonial.name}
                                    </strong>

                                    <span>
                                        {testimonial.company}
                                    </span>

                                </div>

                            </div>


                            <span className="testimonial-dot" />

                        </article>
                    ))}

                </div>


                {/* ======================================
            RIGHT SIDE INFORMATION
        ====================================== */}

                <div className="testimonials-side-info">

                    <div>WHAT WE DO</div>

                    <span>WEB DESIGN</span>
                    <span>DEVELOPMENT</span>
                    <span>AI & AUTOMATION</span>
                    <span>DIGITAL GROWTH</span>

                </div>


                {/* ======================================
            BOTTOM
        ====================================== */}

                <div className="testimonials-bottom">

                    <span>005</span>

                    <span>CLIENT STORIES</span>

                    <span>2026</span>

                </div>

            </div>

        </section>
    );
}