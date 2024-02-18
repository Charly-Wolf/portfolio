import About from './components/About'
import BackToTopBtn from './components/BackToTopBtn'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <main>
      <ToastContainer position='top-center' />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <ContactForm />
      <BackToTopBtn />
    </main>
  )
}
export default App
