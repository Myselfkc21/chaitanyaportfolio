import styles from "./App.module.css";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education";
import WhoIAm from "./components/WhoIAm/WhoIAm";
import Contacts from "./components/Contacts/Contacts.jsx";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <WhoIAm />
      <Contacts />
    </div>
  );
}

export default App;
