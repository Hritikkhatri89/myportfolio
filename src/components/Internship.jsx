import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, Clock, MapPin, CheckCircle2, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { useState, useEffect } from 'react'

const Internship = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [scale, setScale] = useState(1)

  const internships = [
    {
      role: 'API Development Intern',
      company: 'APPXWIND TECHNOLOGY, SURAT (HYBRID)',
      duration: '08 Dec 2025 - 30 Dec 2025',
      hours: '120 Hours Internship',
      location: 'Hybrid / Surat',
      certificateImg: '/internship.png',
      offerLetterImg: '/offer_letter.png',
      description: [
        'Internship Training with Grade A in API Development and Testing.',
        'Studied and implemented REST API fundamentals and HTTP methods (GET, POST, PUT, DELETE).',
        'Handled JSON-based request and response structures for real-world client-server communication.',
        'Tested and analyzed various APIs using Postman to ensure reliability and status code accuracy.',
        'Demonstrated excellent technical knowledge and professional behavior during real-time tasks.'
      ]
    }
  ]

  // Reset scale when image changes or modal closes
  useEffect(() => {
    setScale(1)
  }, [selectedImg])

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  const handleReset = () => setScale(1)

  return (
    <section id="internship" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-wider">Experience</h2>
          <h3 className="text-4xl font-bold">My Internships</h3>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden border-white/5 hover:border-violet-500/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Content Side */}
                <div className="lg:col-span-3 p-8 md:p-12 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-2">{intern.role}</h4>
                      <div className="flex items-center gap-2 text-violet-400 font-semibold text-lg">
                        <Briefcase size={20} />
                        <span>{intern.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-slate-400">
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                        <Calendar size={18} />
                        <span className="text-sm">{intern.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-bold border border-violet-500/20">
                      <Clock size={18} />
                      <span>{intern.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 text-slate-400 px-4 py-2 rounded-full text-sm border border-white/10">
                      <MapPin size={18} />
                      <span>{intern.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-white font-bold flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-violet-400" /> Key Achievements
                    </h5>
                    <ul className="grid gap-3">
                      {intern.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-2 flex flex-col h-full bg-[#0a1120]">
                  <div 
                    className="relative flex-1 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedImg(intern.certificateImg)}
                  >
                    <img 
                      src={intern.certificateImg} 
                      alt="Internship Certificate" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-violet-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 scale-75 group-hover:scale-100 transition-transform">
                        <ZoomIn className="text-white" size={32} />
                        <span className="bg-white text-black px-4 py-1.5 rounded-full font-bold shadow-xl text-xs">View Certificate</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-white/5 flex gap-3">
                    <button 
                      onClick={() => setSelectedImg(intern.certificateImg)}
                      className="flex-1 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 py-3 rounded-xl border border-violet-500/20 text-sm font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Certificate
                    </button>
                    <button 
                      onClick={() => setSelectedImg(intern.offerLetterImg)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-slate-300 py-3 rounded-xl border border-white/10 text-sm font-bold transition-all flex items-center justify-center gap-2"
                    >
                       <Briefcase size={16} /> Offer Letter
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Zoom */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Document Toggler & Zoom Controls */}
              <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex border-r border-white/10 pr-4 mr-0 md:mr-2">
                  <button 
                    onClick={() => setSelectedImg(internships[0].certificateImg)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedImg === internships[0].certificateImg ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Certificate
                  </button>
                  <button 
                    onClick={() => setSelectedImg(internships[0].offerLetterImg)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedImg === internships[0].offerLetterImg ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Offer Letter
                  </button>
                </div>
                
                <div className="flex gap-2">
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
                </div>
              </div>

              {/* Zoomable Image Container */}
              <div className="relative flex-1 w-full bg-white/[0.02] rounded-3xl overflow-hidden border border-white/10 p-2 cursor-grab active:cursor-grabbing">
                <button 
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/10"
                  onClick={() => setSelectedImg(null)}
                >
                  <X size={24} />
                </button>
                
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <motion.div
                    animate={{ scale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-full h-full flex items-center justify-center"
                    drag={scale > 1}
                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  >
                    <img 
                      src={selectedImg} 
                      alt="Enlarged Document" 
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

export default Internship
