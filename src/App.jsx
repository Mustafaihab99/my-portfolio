import About from "./components/About/About";
import ContactSection from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import ProjectSection from "./components/Projects/ProjectSecion";
import SkillSection from "./components/Skills/SkillSection";

function App() {

  return (
    <>
    <NavBar />
    <HeroSection />
    <About />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default App
