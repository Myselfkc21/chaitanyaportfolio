import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
  const [menuOpen, SetmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {!menuOpen ? (
          <GiHamburgerMenu
            className={styles.menuBtn}
            onClick={() => SetmenuOpen(!menuOpen)}
          />
        ) : (
          <IoClose
            className={styles.menuBtn}
            onClick={() => SetmenuOpen(!menuOpen)}
          />
        )}
        <ul className={`${styles.menuitems} ${menuOpen && styles.openMenu}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
