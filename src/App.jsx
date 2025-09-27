import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import ProjectSection from "./components/ProjectsSection/ProjectSection"

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
