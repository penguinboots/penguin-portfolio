import { useState } from 'react'
import './App.scss'
import About from './components/About'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="app-wrapper">
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Hero />
      <Menu isOpen={isOpen} setOpen={setOpen}/>
      <About />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
