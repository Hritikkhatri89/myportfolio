import About from '../components/About'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      <div className="bg-white/5 py-20">
        <div className="container mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold">What I Bring to the Table</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                I combine technical expertise with a creative mindset to build scalable and user-friendly applications.
            </p>
        </div>
        <Skills />
      </div>
      
      {/* Education Summary Card or something similar can go here */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass-card p-12 text-center border-sky-500/20 bg-sky-500/5">
            <h4 className="text-3xl font-bold mb-6">Always Learning & Growing</h4>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Technology is always evolving, and so am I. I spend my free time exploring new frameworks, 
                contributing to open-source projects, and constantly refining my coding practices to deliver 
                high-quality software solutions.
            </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
