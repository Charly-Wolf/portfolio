import About from './components/About'
import BackToTopBtn from './components/BackToTopBtn'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import RevealOnScroll from './components/RevealOnScroll'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <main>
      <ToastContainer position='top-center' />
      <Navbar />
      <Hero />
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <ContactForm />
      <BackToTopBtn />
      {/* TODO: Footer */}
    </main>
  )
}
export default App
