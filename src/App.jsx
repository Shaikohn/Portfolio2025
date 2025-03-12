import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import About from './pages/About'
import { useEffect } from 'react'

function App() {

  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('about-bg'/* , 'skills-bg', 'projects-bg' */);

    if (location.pathname === '/about') {
      document.body.classList.add('about-bg');
    }
    /* if (location.pathname === '/skills') {
      document.body.classList.add('skills-bg');
    }
    if(location.pathname === '/projects') {
      document.body.classList.add('projects-bg')
    } */
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </>
  )
}

export default App
