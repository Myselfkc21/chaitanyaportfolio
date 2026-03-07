import React from "react";
import styles from "./Skills.module.css";
import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiNestjs,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiAmazonec2,
  SiSwagger,
} from "react-icons/si";
import { FaKey, FaLink } from "react-icons/fa";

const skillsData = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React", icon: <FaReact /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "REST APIs", icon: <FaLink /> },
  { name: "JWT", icon: <FaKey /> },
  { name: "Webhooks", icon: <FaLink /> },
  { name: "TypeORM", icon: <FaDatabase /> },
  { name: "Bull Queue", icon: <FaDatabase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS EC2", icon: <SiAmazonec2 /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id="skills">Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
