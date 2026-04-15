import './index.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'
import Policies from './sections/Policies'
import Footer from './components/layout/Footer'
import Cantina from './pages/Cantina'

function CampestrePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Policies />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      {/* Página Principal - El Campestre */}
      <Route path="/" element={<CampestrePage />} />
      
      {/* Página Exclusiva - La Cantina */}
      <Route path="/cantina" element={<Cantina />} />
    </Routes>
  )
}

export default App
