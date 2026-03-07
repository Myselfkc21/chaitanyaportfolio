import React from "react";
import styles from "./AboutSection.module.css";

const aboutDetails = [
  {
    title: "APIs & services",
    description: "I design and build REST APIs and event-driven pieces that other devs and the frontend can rely on. NestJS, Node, TypeORM — the usual suspects, used in a way that stays readable.",
  },
  {
    title: "Data & performance",
    description: "Databases and caching are where I go when something feels slow. I'd rather fix a query or add a sensible cache than throw more servers at it.",
  },
  {
    title: "Ownership",
    description: "I like taking a feature from idea to deploy: schema, business logic, payments or webhooks, and a bit of observability so we know it's healthy.",
  },
  {
    title: "Working with others",
    description: "Code reviews, sprint planning, and clear communication matter to me. I try to leave the codebase and the team in a better state than I found them.",
  },
];

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerItems}>
        <h2 className={styles.title} id="about">About</h2>
        <p className={styles.summary}>
          I got into backend because I like when things run fast and don't break under load. 
          I care about clear APIs, sensible data models, and shipping with the team. 
          The last year I've been doing that at a product startup — a bit of everything from schema design to payment flows and making sure the system stays up.
        </p>
        <div className={styles.items}>
          {aboutDetails.map((item, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.bullet} />
              <div className={styles.itemtext}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
