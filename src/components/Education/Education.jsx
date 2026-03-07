import React from "react";
import { MapPin } from "lucide-react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.card}>
        <p className={styles.degree}>B.Tech, Computer Science & Engineering</p>
        <p className={styles.institute}>
          <MapPin size={14} />
          Sreenidhi Institute of Science and Technology, Hyderabad
        </p>
        <p className={styles.meta}>2021 – 2025 · CGPA 7.8</p>
      </div>
    </section>
  );
};

export default Education;
