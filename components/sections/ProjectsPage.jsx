import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

const projects = [
  {
    name: "Samrat Mills",
    slug: "samrat-mills",
    year: "2026",
    image:
        "/samrat_textiles.jpeg",
    category: "Design / Product",
  },
  {
    name: "ThreadsRepublic",
    slug: "threads-republic",
    year: "2025",
    image:
      "/threadsrepublic_banner_new.png",
    category: "Creative / Digital",
  },
  {
    name: "Aashi Yoga",
    slug: "aashi-yoga",
    year: "2026",
    image:
      "/yoga-banner.png",
    category: "Digital Experience, Web development",
  },
  {
    name: "Catalog Pro Extension",
    slug: "catalog-pro",
    year: "2026",
    image:
      "/catalogPro_Sell.png",
    category: "Product / Web",
  },
  {
    name: "Community Management Software",
    slug: "community-management",
    year: "2023",
    image:
      "/football.png",
    category: "Brand / Digital / Software Development",
  },
  {
    name: "Liinks",
    slug: "liinks",
    year: "2023",
    image:
      "linktree_image.png",
    category: "Digital Product",
  },
];

function ProjectItem({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="all-project-card"
    >
      <div className="all-project-top">
        <span className="all-project-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="all-project-year">
          /{project.year}
        </span>
      </div>

      <div className="all-project-image-wrap">
        <img
          src={project.image}
          alt={project.name}
          className="all-project-image"
          draggable="false"
        />

        <div className="all-project-hover">
          <span>View project</span>
          <span className="all-project-arrow">↗</span>
        </div>
      </div>

      <div className="all-project-bottom">
        <h2>{project.name}</h2>

        <span>{project.category}</span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="all-projects-page">

      {/* HEADER */}
      <section className="all-projects-header">

        <div className="all-projects-number">
          (27)
        </div>

        <div className="all-projects-title-wrap">
          <h1>Projects</h1>

          <div className="all-projects-year">
            ©2025
          </div>
        </div>

        <div className="all-projects-description">
          <p>
            A selection of work,
            <br />
            experiments and digital
            <br />
            experiences we've created.
          </p>
        </div>

      </section>


      {/* PROJECTS */}
      <section className="all-projects-grid">

        {projects.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            index={index}
          />
        ))}

      </section>

    </main>
  );
}