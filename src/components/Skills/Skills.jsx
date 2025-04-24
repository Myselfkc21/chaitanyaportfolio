import React from "react";
import styles from "./Skills.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMongodb, SiMysql, SiAdonisjs, SiSolidity, SiRedux, SiSocketdotio, SiAwsamplify } from "react-icons/si";

const skillsData = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "AdonisJS", icon: <SiAdonisjs /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <FaDatabase /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <FaDatabase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <SiAwsamplify /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id="TechStack">Tech Stack</h2>
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
