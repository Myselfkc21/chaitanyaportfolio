import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import styles from "./Experience.module.css";

const experience = [
  {
    role: "Junior Backend Developer",
    company: "CraftNotion",
    location: "Hyderabad",
    period: "Jan 2025 – Dec 2025",
    highlights: [
      "Core part of the backend team — shipped APIs that other devs and the frontend actually enjoyed using.",
      "Took slow queries personally; fixed them and added caching where it mattered. Response times and throughput got noticeably better.",
      "Built a Kafka-based pipeline so we could track client location in near real time. Learned a lot about events and scale.",
      "Built a bulk-upload microservice (CSV/Word parsing) so we could stop manually re-entering question banks. Import time dropped by a lot.",
      "Wired in Razorpay and Stripe with proper webhook handling so payments and subscriptions just worked.",
      "Grew from intern to junior dev there — stayed because the work and the team were worth it.",
    ],
  },
  {
    role: "Technical Sales Engineer Intern",
    company: "Whitestack Solutions",
    location: "Hyderabad",
    period: "Sep 2024 – Dec 2024",
    highlights: [
      "Built a full-stack demo app so new clients could see the product in action instead of just slides.",
      "Worked with both engineering and client-facing folks to prep and run technical demos.",
      "Wrote and kept API docs in shape so internal and external devs could onboard without guessing.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Where I've worked</h2>
      <p className={styles.subtitle}>
        Product startups, backend focus, and a bit of full-stack when it helped.
      </p>
      <div className={styles.timeline}>
        {experience.map((job, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardAccent} />
            <div className={styles.header}>
              <div className={styles.roleRow}>
                <Briefcase className={styles.icon} size={18} />
                <h3 className={styles.role}>{job.role}</h3>
              </div>
              <div className={styles.meta}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.location}>
                  <MapPin size={12} />
                  {job.location}
                </span>
                <span className={styles.dot}>·</span>
                <span className={styles.period}>
                  <Calendar size={12} />
                  {job.period}
                </span>
              </div>
            </div>
            <ul className={styles.highlights}>
              {job.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
