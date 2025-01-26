import React from "react";
import styles from "./HeroSection.module.css";
import pfp from "../../assets/pfp.png";
const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Chaitanya</span>
        </h1>
        <p className={styles.description}>
          I specialize in web development and digital marketing. My work spans
          from creating web applications using React to developing systems for
          gesture recognition and autism prediction. I'm always eager to learn
          and take on new challenges in the tech world.
        </p>
        <div className={styles.btnContainer}>
          <a
            href="mailto:arekapudikrishnachaitanya@gmail.com"
            className={styles.contactBtn}
          >
            Contact me
          </a>
          <div className={styles.btnGlow}></div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img className={styles.img} src={pfp} alt="Profile" />
        <div className={styles.imageBorder}></div>
      </div>

      <div className={styles.TopBlur}></div>
      <div className={styles.BottomBlur}></div>
    </section>
  );
};

export default HeroSection;
