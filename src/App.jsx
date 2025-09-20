import AboutSection from "./components/AboutSection/AboutSection"
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
      </main>
    </>
  )
}

export default App
