import './index.css'
import Header from './components/layout/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <About />
      <Menu />
    </div>
  )
}

export default App
