import './App.scss'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      {/* <Menu /> */}
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
