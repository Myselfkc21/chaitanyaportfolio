import React from "react";
import { Mail, Linkedin, Github, Phone, FileDown } from "lucide-react";
import styles from "./Contacts.module.css";

const contacts = [
  {
    icon: Mail,
    link: "mailto:arekapudikrishnachaitanya@gmail.com",
    text: "arekapudikrishnachaitanya@gmail.com",
  },
  {
    icon: Phone,
    link: "tel:+919652188766",
    text: "+91 9652188766",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/krishnachaitanya10/",
    text: "linkedin.com/in/krishnachaitanya10",
  },
  {
    icon: Github,
    link: "https://github.com/Myselfkc21/",
    text: "github.com/myselfkc21",
  },
];

const Contacts = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.subtitle}>
            If you'd like to work together or just say hi, drop a line.
          </p>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            <FileDown size={18} />
            Resume (PDF)
          </a>
        </div>
        <div className={styles.links}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon className={styles.icon} />
              <span className={styles.linkText}>{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
