import { Hero } from './components/landing/Hero'
import { Features } from './components/landing/Features'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <Hero />
      <Features />
    </div>
  )
}

export default App