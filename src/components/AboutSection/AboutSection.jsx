import React from "react";
import styles from "./AboutSection.module.css";
import pic from "../../assets/download.png";
import { FaServer, FaCode, FaUsers, FaProjectDiagram } from "react-icons/fa";

const aboutDetails = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    description: "Hands-on experience in building scalable applications using React, Node.js, AdonisJS, and PostgreSQL.",
  },
  {
    icon: <FaServer />,
    title: "API & Backend Architecture",
    description: "Specialized in designing efficient, RESTful APIs and scalable backend systems.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects & Innovation",
    description: "Built impactful projects like a Web3 dApp, a language learning app, and real-time data scrapers.",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    description: "Led cross-functional collaboration across frontend and backend teams; strong communication and problem-solving skills.",
  },
];

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerItems}>
        <h1 className={styles.title} id="about">About Me</h1>
        <div className={styles.contents}>
          <div className={styles.imageWrapper}>
            <img src={pic} className={styles.image} alt="Krishna Chaitanya" />
          </div>
          <div className={styles.items}>
            {aboutDetails.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.itemtext}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
