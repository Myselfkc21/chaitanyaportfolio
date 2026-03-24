import React from "react";
import { Github, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";
import projects from "../../data/ProjectsData.json";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Things I've built</h2>
      <p className={styles.subtitle}>
        Side projects and experiments — the kind of stuff I do when I'm curious about a problem.
      </p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.projectName}>{project.project_name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, id) => (
                  <span key={id} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.live_link && (
                  <a
                    href={project.live_link}
                    className={styles.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    <span>Live</span>
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
