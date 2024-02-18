import About from './components/About'
import BackToTopBtn from './components/BackToTopBtn'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <BackToTopBtn />
    </div>
  )
}
export default App
