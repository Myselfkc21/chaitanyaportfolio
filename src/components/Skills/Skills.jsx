import React from "react";
import styles from "./Skills.module.css";

const skillsData = [
  { name: "C++", level: 75 },
  { name: "React", level: 70 },
  { name: "HTML5", level: 89 },
  { name: "CSS3", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "Data Structures", level: 80 },
  { name: "DBMS", level: 75 },
  { name: "Node.js", level: 60 },
  { name: "PHP", level: 70 },
];

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id="TechStack">
        Tech Stack
      </h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
