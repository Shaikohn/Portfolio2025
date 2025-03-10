import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </>
  )
}

export default App
