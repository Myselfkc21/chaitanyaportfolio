import React from "react";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey,
          <br /> I am Chaitanya
        </h1>
        <p className={styles.description}>
          I specialize in web development and digital marketing . My work spans
          from creating web applications using React to developing systems for
          gesture recognition and autism prediction. I'm always eager to learn
          and take on new challenges in the tech world.{" "}
        </p>
        <a
          className={styles.contactBtn}
          href="arekapudikrishnachaitanya@gmail.com"
        >
          Contact me 
        </a>
      </div>
      <img
        className={styles.img}
        src="https://i.pinimg.com/564x/15/7d/31/157d310038f315f2d75e5e35455a1075.jpg"
        alt=""
      />
      <div className={styles.TopBlur}></div>
      <div className={styles.BottomBlur}></div>
    </section>
  );
};

export default HeroSection;
