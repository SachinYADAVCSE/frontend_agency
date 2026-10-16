import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
const projects = [
  {
    name: "Boltshift",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=90",
    label: "Boltshift",
    slug: "boltshift"
  },
  {
    name: "Ephemeral",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=90",
    label: "Ephemeral",
    slug: "boltshift"
  },
  {
    name: "Powersurge",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=90",
    label: "Powersurge",
    slug: "boltshift"
  },
  {
    name: "Mastermail",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90",
    label: "Mastermail",
    slug: "boltshift"

  },
  {
    name: "Warpspeed",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=90",
    label: "Warpspeed",
    slug: "boltshift"

  },
  {
    name: "CloudWatch",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    label: "CloudWatch",
    slug: "boltshift"

  },
];

function ProjectCard({ project }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--mouse-x", "50%");
    e.currentTarget.style.setProperty("--mouse-y", "50%");
  };

  return (
    <article className="project-card">
      {/* Project Header */}
      <div className="project-card-header">
        <div className="project-name">{project.name}</div>

        <div className="project-meta">
          <span className="project-year">/{project.year}</span>

          <div className="project-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Image */}
      <Link

        to={`/projects/${project.slug}`}
        className="project-image-wrap project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={project.image}
          alt={project.name}
          className="project-image"
          draggable="false"
        />

        {/* Center Project Identity */}
        <div className="project-overlay">
          <div className="project-icon">
            ↗
          </div>

          <span>{project.label}</span>
        </div>

        {/* Hover dark layer */}
        <div className="project-hover-layer"></div>
      </Link>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* Section Intro */}
      <div className="projects-intro">

        <div className="projects-number">
          (27)
        </div>

        <div className="projects-heading">
          <h2>Projects</h2>
          <div className="projects-year">©2025</div>
        </div>

        <div className="projects-description">
          <p>
            We’ve helped businesses across
            <br />
            industries achieve their goals.
            <br />
            Here are some of our recent projects.
          </p>
        </div>

      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.name}-${index}`}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}