import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import styles from "./Contacts.module.css";
const Contacts = () => {
  return (
    <section className={styles.cont} id="contact">
      <div className={styles.leftside}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.rightside}>
        <div className={styles.gmail}>
          <IoMdMail className={styles.icons} />
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrglXjTlRBHLShJNNgGqhLLLBSBRQzNrVkMkWShgZLNstndPMjVVRDkZDwXRbCBWxjhPkL">
            arekapudikrishnachaitanya@gmail.com
          </a>
        </div>
        <div className={styles.linkedin}>
          <FaLinkedin className={styles.icons} />
          <a href="https://www.linkedin.com/in/krishnachaitanya10/">
            linkedin.com/arekapudikrishnachaitanya
          </a>
        </div>
        <div className={styles.git}>
          <FaGithub className={styles.icons} />
          <a href="https://github.com/Myselfkc21/">github.com/myselfkc21</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
