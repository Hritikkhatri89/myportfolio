import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Download, X, ZoomIn, ZoomOut, RotateCcw, Eye } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [showResume, setShowResume] = useState(false)
  const [scale, setScale] = useState(1)

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  const handleReset = () => setScale(1)

  const closeResume = () => {
    setShowResume(false)
    setScale(1)
  }

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-violet-400 font-semibold mb-4 tracking-widest uppercase">Available for work</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            KHATRI HRITIK <br /> 
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">NARESHBHAI</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            I'm a BCA Student (Semester 6) at Smt Z.S. Patel College, Surat. 
            Passionate about Frontend Web Development with skills in HTML, CSS, JavaScript & React. 
            My goal is to build modern, responsive websites that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">View Projects</button>
            <button 
              onClick={() => setShowResume(!showResume)}
              className="px-6 py-3 border border-white/20 rounded-full font-semibold hover:bg-violet-500/20 hover:text-violet-400 hover:border-violet-500/40 transition-all duration-300 flex items-center gap-2 text-white"
            >
              <Eye size={20} /> View Resume
            </button>
            <a 
              href="/resume.pdf" 
              download="Hritik_Khatri_Resume.pdf"
              className="px-6 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-white"
              title="Download Resume"
            >
              <Download size={20} />
            </a>
          </div>
          <div className="mt-12 flex gap-6 grayscale opacity-50">
            <a href="https://github.com/Hritikkhatri89" target="_blank" rel="noopener noreferrer">
              <Github className="cursor-pointer hover:grayscale-0 hover:opacity-100 transition-all hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/hritik-khatri-171543379" target="_blank" rel="noopener noreferrer">
              <Linkedin className="cursor-pointer hover:grayscale-0 hover:opacity-100 transition-all hover:text-blue-500" />
            </a>
            <a href="mailto:rititkhatri51@gmail.com">
              <Mail className="cursor-pointer hover:grayscale-0 hover:opacity-100 transition-all hover:text-red-400" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
          <img 
            src="/profile_cropped.png" 
            alt="Profile" 
            className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-white/10" 
          />
        </motion.div>
      </div>

      {/* Resume Lightbox Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={closeResume}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="flex flex-wrap justify-between items-center w-full max-w-2xl px-4 py-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <span className="text-white font-bold ml-2">My Resume</span>
                <div className="flex items-center gap-2">
                  <button onClick={handleZoomOut} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Zoom Out">
                    <ZoomOut size={20} />
                  </button>
                  <div className="flex items-center px-2 text-xs font-mono text-violet-400 min-w-[45px] justify-center">
                    {Math.round(scale * 100)}%
                  </div>
                  <button onClick={handleZoomIn} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Zoom In">
                    <ZoomIn size={20} />
                  </button>
                  <button onClick={handleReset} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Reset Zoom">
                    <RotateCcw size={20} />
                  </button>
                  <a href="/resume.pdf" download="Hritik_Khatri_Resume.pdf" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all mx-2" title="Download">
                    <Download size={20} />
                  </a>
                  <button onClick={closeResume} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-red-300 rounded-lg transition-all">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Zoomable Image Container */}
              <div className="relative flex-1 w-full max-w-4xl bg-white/[0.02] rounded-3xl overflow-hidden border border-white/10 p-2 cursor-grab active:cursor-grabbing">
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <motion.div
                    animate={{ scale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-full h-full flex items-center justify-center"
                    drag={scale > 1}
                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  >
                    <img 
                      src="/resume.png" 
                      alt="Hritik Resume" 
                      className="max-w-full max-h-full object-contain rounded-lg pointer-events-none"
                    />
                  </motion.div>
                </div>
              </div>

              <p className="text-slate-500 text-xs hidden md:block">
                Use controls above to zoom. Drag to move when zoomed in.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
