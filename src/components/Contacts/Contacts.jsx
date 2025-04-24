import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Contacts.module.css";

const contacts = [
  {
    icon: Mail,
    link: "mailto:arekapudikrishnachaitanya@gmail.com",
    text: "arekapudikrishnachaitanya@gmail.com",
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
          <h2 className={styles.title}>Let’s Connect</h2>
          <p className={styles.subtitle}>
            Interested in collaborating or have a question? I'm always open to
            discussing new ideas or opportunities.
          </p>
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
