import React, { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <a className={styles.title} href="/">
        Krishna Chaitanya
      </a>

      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="/resume.pdf" className={styles.resumeBtn} download>
          <FileDown size={16} />
          Resume
        </a>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.openMenu : ""}`}
        >
          <li className={styles.mobileResume}>
            <a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>
              <FileDown size={16} />
              Download Resume
            </a>
          </li>
          {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
