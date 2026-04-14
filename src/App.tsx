import './index.css'
import Header from './components/layout/Header'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App
