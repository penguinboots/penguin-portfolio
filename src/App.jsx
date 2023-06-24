import { useState } from 'react'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <div className="app-wrapper">
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Hero />
      <Menu isOpen={isOpen} setOpen={setOpen} closeMenu={closeMenu}/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
