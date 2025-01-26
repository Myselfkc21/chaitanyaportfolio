import React, { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import styles from "./Projects.module.css";
import projects from "../../data/ProjectsData.json";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.card}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.projectName}>{project.project_name}</h3>
                <Star
                  className={`${styles.star} ${
                    hoveredIndex === index ? styles.starActive : ""
                  }`}
                  size={20}
                />
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.technologies}>
                {project.technologies.map((tech, id) => (
                  <span key={id} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                <a
                  href={project.github_link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>

                {project.image && (
                  <a
                    href={project.image}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            <div className={styles.overlay} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
