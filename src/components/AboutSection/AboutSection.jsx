import React from "react";
import { MdAutoGraph } from "react-icons/md";
import { AiFillLayout } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import styles from "../AboutSection/AboutSection.module.css";
import pic from "../../assets/download.png";
const AboutSection = () => {
  return (
    <section className={styles.container} id="Experience">
      <div className={styles.containerItems}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.contents}>
          {/* <img
            src="https://img.freepik.com/free-vector/illustrated-young-girl-playing-video-games_52683-37363.jpg?t=st=1725258753~exp=1725262353~hmac=50491b7a132d4c8809721f997c77a5976504c4ba8e6447b1999723f74601a61c&w=400"
            alt=""
          /> */}
          <img src={pic} className={styles.image} alt="" />

          <div className={styles.items}>
            <div className={styles.item}>
              <FaCode className={styles.icon} />
              <div>
                <div className={styles.itemtext}>
                  <h2>FrontEnd</h2>
                  <p>
                    I’m a front-end developer with experience in building
                    responsive and optimized sites.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <FaServer className={styles.icon} />
              <div>
                <div className={styles.itemtext}>
                  <h2>BackEnd</h2>
                  <p>
                    I’m a budding back-end developer with a growing interest in
                    building scalable server-side applications.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <MdAutoGraph className={styles.icon} />
              <div>
                <div className={styles.itemtext}>
                  <h2>Digital Marketing</h2>
                  <p>
                    I'm a newcomer to digital marketing, keen on createing
                    effective strategies for online engagement and brand growth.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <AiFillLayout className={styles.icon} />
              <div>
                <div className={styles.itemtext}>
                  <h2>FrontEnd</h2>
                  <p>
                    I'm an aspiring UI/UX designer, focused on learning how to
                    create intuitive and visually appealing user interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
