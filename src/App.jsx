import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </>
  )
}

export default App
