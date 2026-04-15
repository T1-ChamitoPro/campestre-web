import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Página Principal - El Campestre */}
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <CampestrePage />
            </motion.div>
          } 
        />

        {/* Página de La Cantina */}
        <Route 
          path="/cantina" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <Cantina />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
