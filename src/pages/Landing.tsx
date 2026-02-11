import { Hero } from '../components/landing/Hero'
import { Features } from '../components/landing/Features'
import { Preview } from '../components/landing/Preview'
import { Footer } from '../components/landing/Footer'
import ScrollToTopButton from '../mood-selector/ScrollToTopButton' 

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <Hero />
      <Features />
      <Preview />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}