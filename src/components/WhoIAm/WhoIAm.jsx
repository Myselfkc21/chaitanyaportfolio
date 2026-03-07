import React from "react";
import styles from "./WhoIAm.module.css";

const traits = [
  {
    title: "Community",
    text: "I run hackathons and tech sessions when I'm not at the keyboard. Led events for 100+ folks as club coordinator at Tech Vision. I like shipping together.",
  },
  {
    title: "Discipline",
    text: "Karate brown belt — the same focus and persistence show up in how I learn new tech and own my work. No flash, just consistency.",
  },
  {
    title: "Off the screen",
    text: "Learning acoustic guitar. I need something that isn't a screen and isn't work. Keeps me balanced and (hopefully) easier to work with.",
  },
  {
    title: "How I work",
    text: "On time, clear in communication, and I try to leave code and docs in a better state than I found them. I adapt when the plan changes.",
  },
];

const WhoIAm = () => {
  return (
    <section className={styles.container} id="whoiam">
      <h2 className={styles.title}>Who I am</h2>
      <p className={styles.subtitle}>
        A bit about how I show up — in a team and outside of work.
      </p>
      <div className={styles.grid}>
        {traits.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIAm;
