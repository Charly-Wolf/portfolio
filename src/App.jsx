import About from './components/About'
import BackToTopBtn from './components/BackToTopBtn'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <BackToTopBtn />
    </>
  )
}
export default App
