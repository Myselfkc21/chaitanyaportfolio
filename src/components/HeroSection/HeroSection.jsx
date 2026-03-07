import React from "react";
import { FileDown, Mail } from "lucide-react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.title}>
          <span className={styles.name}>Krishna Chaitanya</span>
        </h1>
        <p className={styles.tagline}>Backend developer · Hyderabad</p>
        <p className={styles.description}>
          I build the parts of software you don't see — APIs, queues, databases. 
          I like when things run fast, stay reliable, and play nice with the rest of the system. 
          Lately I've been doing that at a product startup: a bit of everything from schema design to payment flows.
        </p>
        <div className={styles.btnContainer}>
          <a href="/resume.pdf" className={styles.contactBtn} download>
            <FileDown size={18} />
            Resume
          </a>
          <a href="mailto:arekapudikrishnachaitanya@gmail.com" className={styles.secondaryBtn}>
            <Mail size={18} />
            Say hi
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.avatar}>
          <span className={styles.initials}>KC</span>
        </div>
        <div className={styles.imageBorder} />
      </div>
    </section>
  );
};

export default HeroSection;
