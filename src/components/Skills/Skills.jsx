import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h1 className={styles.head}>Tech Stack</h1>
      <main className={styles.main}>
        <ul className={styles.skillList}>
          <li className={styles.cpp}>C++</li>
          <li className={styles.react}>React</li>
          <li className={styles.html5}>HTML5</li>
          <li className={styles.css3}>CSS3</li>
          <li className={styles.js}>JavaScript</li>
          <li className={styles.ds}>Data Structures</li>
          <li className={styles.dbms}>DBMS</li>
          <li className={styles.node}>Node JS</li>
          <li className={styles.php}>PHP</li>
          {/* <li className={styles.figma}>Figma</li> */}
        </ul>
      </main>
    </section>
  );
};

export default Skills;
