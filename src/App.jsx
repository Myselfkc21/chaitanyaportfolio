
import styles from "./App.module.css"
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  )
}

export default App;
