import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Skills />
      
      {/* Featured Projects Preview */}
      <div className="relative">
        <Projects />
        <div className="container mx-auto px-6 pb-20 flex justify-center">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/10 glass-card hover:bg-white/5 transition-all flex items-center gap-2 font-semibold"
            >
              View All Projects <ChevronRight size={20} />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
