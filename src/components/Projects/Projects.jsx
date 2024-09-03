import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/ProjectsData.json";
const Projects = () => {
  return (
    <section className={styles.conatiners} id="Projects">
      <h1 className={styles.heading}>Projects</h1>
      <div>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.cards}>
              <div className={styles.leftside}>
                <p className={styles.name}>{project.project_name}</p>
                <p className={styles.desc}>{project.description}</p>
                <a href={project.github_link}>GitHub link</a>
                <div className={styles.tech}>
                  {project.technologies.map((tech, id) => {
                    return (
                      <div className={styles.stack}>
                        <p>{tech}</p>
                      </div>
                    );
                  })}
                </div>
                {project.image ? (
                  <div className={styles.preview}>
                    {project.image ? (
                      <a href={project.image}>Preview it</a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
