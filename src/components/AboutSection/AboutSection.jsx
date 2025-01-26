import React, { useState } from "react";
import { Code, Server, LayoutDashboard, TrendingUp } from "lucide-react";
import styles from "./AboutSection.module.css";
import pic from "../../assets/download.png";

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.container}>
      <div className={styles.containerItems}>
        <h1 className={styles.title} id="about">
          About Me
        </h1>
        <div className={styles.contents}>
          <div className={styles.imageWrapper}>
            <img src={pic} className={styles.image} alt="Profile" />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.items}>
            {[
              {
                Icon: Code,
                title: "Frontend Development",
                desc: "Experienced in building responsive and optimized sites with modern frameworks and best practices.",
              },
              {
                Icon: Server,
                title: "Backend Development",
                desc: "Proficient in developing scalable server-side applications and RESTful APIs.",
              },
              {
                Icon: TrendingUp,
                title: "Digital Marketing",
                desc: "Strategic approach to digital marketing with focus on data-driven growth and engagement.",
              },
              {
                Icon: LayoutDashboard,
                title: "UI/UX Design",
                desc: "Creating intuitive and visually appealing interfaces with focus on user experience and accessibility.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <item.Icon className={styles.icon} />
                <div className={styles.itemtext}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
