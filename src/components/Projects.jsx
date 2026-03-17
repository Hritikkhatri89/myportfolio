import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const ProjectCard = ({ project, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const nextImg = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImg = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass-card flex flex-col overflow-hidden bg-[#0a1120] border-white/5 hover:border-violet-500/30 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video bg-[#020617]">
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentImgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={project.images[currentImgIndex]} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </AnimatePresence>
        
        {/* Slider Controls (Visible on hover if >1 image) */}
        {project.images.length > 1 && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent pointer-events-none" />
            
            <button 
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-violet-500 text-white p-2 rounded-full backdrop-blur-md transition-all z-10 border border-white/10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-violet-500 text-white p-2 rounded-full backdrop-blur-md transition-all z-10 border border-white/10"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => { e.preventDefault(); setCurrentImgIndex(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === currentImgIndex ? 'w-6 bg-violet-400' : 'w-2 bg-white/50 hover:bg-white/90'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded-md text-violet-400">
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">{project.title}</h4>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-1">{project.desc}</p>
        
        {/* Links Section */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
          <a href={project.github} className="text-sm font-semibold flex items-center gap-2 hover:text-white text-slate-400 transition-colors">
            <Github size={16} /> Code
          </a>
          <a href={project.link} className="text-sm font-semibold flex items-center gap-2 hover:text-violet-400 transition-colors">
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Dream Tour & Travel Management System',
      desc: 'Developed a PHP & MySQL-based web application for managing travel and tour packages with user booking and admin modules.',
      images: ['/dreamtour1.png'],
      tags: ['PHP', 'MySQL', 'Bootstrap', 'phpMyAdmin'],
      link: '#',
      github: 'https://github.com/Hritikkhatri89'
    },
    {
      title: 'Modern Portfolio',
      desc: 'My personal professional portfolio website built with React, Framer Motion, and Tailwind CSS.',
      images: ['/project2.png', '/project1.png'], // Add more images here when you have them
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      link: '#',
      github: 'https://github.com/Hritikkhatri89'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-wider">My Portfolow</h2>
            <h3 className="text-4xl font-bold">Latest Projects</h3>
          </div>
          <a href="#" className="text-violet-400 flex items-center gap-2 hover:gap-3 transition-all">
            See all projects <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
