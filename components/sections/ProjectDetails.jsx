import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const projects = [
    {
      name: "Samrat Mills",
      slug: "samrat-mills",
      year: "2026",
      category: "Branding / Web Development",
  
      image: "/projects/samrat-mills.jpg", /// you need to add the image
  
      description:
        "Rebranding and a product-focused digital experience that simplifies textile discovery and helps turn customer interest into structured business inquiries.",
  
      services: [
        "Rebranding",
        "Website Design",
        "Website Development",
        "Content Shooting",
        "Inquiry System",
      ],
  
      challenge:
        "Samrat Mills needed more than a conventional company website. Textile buyers needed an easier way to discover relevant yarns and fabrics, understand the available offerings, and inquire about products. The business also needed to collect useful requirement details before investing time in meetings with potential customers.",
  
      approach:
        "We approached the project through rebranding, website development, and content shooting. The website's inquiry experience was designed to help buyers find relevant products, communicate through their preferred channels—including calls, WhatsApp, and email—and share details about their requirements. This helps the business better understand potential customers and prepare for more productive follow-up conversations.",
    },
  
    // Keep your existing dummy projects below for now.
    // We can replace them as you share your actual projects.

  {
    name: "ThreadsRepublic",
    slug: "threads-republic",
    year: "2025",
    category: "Creative / Digital",
    image:
      "/threadsrepublic_site.png",

    description:
      "A visual-first digital experience built around storytelling and strong visual direction. threadsrepublic.com",

    services: [
      "Creative Direction",
      "Web Design",
      "Development",
      "Complete branding"
    ],

    challenge:
      "Build a digital identity that could communicate the project's visual character immediately.",

    approach:
      "The experience uses typography, imagery and subtle interactions to guide visitors through the story.",
  },

  {
    name: "Aashi Yoga",
    slug: "aashi-yoga",
    year: "2024",
    category: "Digital Experience",
    image:
      "/aashi-site.png",

    description:
      "A performance-focused digital experience designed around clarity and visual impact.",

    services: [
      "Strategy",
      "UI / UX",
      "Development",
    ],

    challenge:
      "Translate a performance-driven brand into a digital experience that feels equally powerful.",

    approach:
      "We created a focused visual system combining bold typography, imagery and responsive interactions.",
  },

  {
    name: "Catalog Pro",
    slug: "catalog-pro",
    year: "2026",
    category: "Product / Web",
    image:
      "/catalog-pro.png",

    description:
      "A modern digital product experience designed around communication and usability.",

    services: [
      "Product Design",
      "Web Design",
      "Development",
    ],

    challenge:
      "Make a complex digital product feel approachable and easy to understand.",

    approach:
      "The design focuses on hierarchy, simplicity and a clear interaction system.",
  },

  {
    name: "Warpspeed",
    slug: "warpspeed",
    year: "2023",
    category: "Brand / Digital",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=90",

    description:
      "A digital experience built around speed, energy and visual movement.",

    services: [
      "Brand Direction",
      "Web Design",
      "Development",
    ],

    challenge:
      "Create a digital presence that feels fast and energetic without compromising usability.",

    approach:
      "Motion, typography and imagery were combined to create a fast-moving visual language.",
  },

  {
    name: "liinks",
    slug: "liinks",
    year: "2023",
    category: "Digital Product, Saas",
    image:
      "/link_saas.png",

    description:
      "A clean digital product experience focused on clarity and functionality.",

    services: [
      "Product Design",
      "UX Strategy",
      "Development",
    ],

    challenge:
      "Turn a technically complex product into an experience that is easy to understand.",

    approach:
      "We reduced unnecessary complexity and created a simple, structured interface.",
  },
];


export default function ProjectDetails() {

  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );


  // Project doesn't exist
  if (!project) {
    return (
      <main className="project-not-found">

        <span>(404)</span>

        <h1>
          Project
          <br />
          not found.
        </h1>

        <Link to="/projects">
          ← Back to projects
        </Link>

      </main>
    );
  }


  return (
    <main className="project-details-page">

      {/* =========================
          TOP
      ========================= */}

      <section className="project-details-top">

        <Link
          to="/projects"
          className="project-back"
        >
          ← All projects
        </Link>

        <div className="project-details-meta">

          <span>
            /{project.year}
          </span>

          <span>
            {project.category}
          </span>

        </div>

      </section>


      {/* =========================
          HERO
      ========================= */}

      <section className="project-details-hero">

        <div className="project-details-title">

          <span className="project-details-number">
            ({project.year})
          </span>

          <h1>
            {project.name}
          </h1>

        </div>


        <p className="project-details-intro">
          {project.description}
        </p>


        <div className="project-details-image">

          <img
            src={project.image}
            alt={project.name}
            draggable="false"
          />

        </div>

      </section>


      {/* =========================
          PROJECT INFORMATION
      ========================= */}

      <section className="project-details-info">

        <div className="project-info-label">
          SERVICES
        </div>

        <div className="project-services">

          {project.services.map((service) => (
            <span key={service}>
              {service}
            </span>
          ))}

        </div>

      </section>


      {/* =========================
          CHALLENGE
      ========================= */}

      <section className="project-story">

        <div className="project-story-label">
          THE CHALLENGE
        </div>

        <div className="project-story-content">

          <h2>
            The problem
            <br />
            we solved.
          </h2>

          <p>
            {project.challenge}
          </p>

        </div>

      </section>


      {/* =========================
          APPROACH
      ========================= */}

      <section className="project-story">

        <div className="project-story-label">
          OUR APPROACH
        </div>

        <div className="project-story-content">

          <h2>
            Designed
            <br />
            with intent.
          </h2>

          <p>
            {project.approach}
          </p>

        </div>

      </section>


      {/* =========================
          LARGE PROJECT IMAGE
      ========================= */}

      <section className="project-large-image">

        <img
          src={project.image}
          alt=""
          draggable="false"
        />

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="project-details-cta">

        <span>
          Have a project in mind?
        </span>

        <h2>
          Let's talk.
        </h2>

        <Link to="/contact">
          Start a conversation ↗
        </Link>

      </section>

    </main>
  );
}