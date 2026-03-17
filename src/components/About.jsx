import { motion } from 'framer-motion'
import { User, Code2, Globe, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Coding Months', value: '18+', icon: <Code2 className="text-violet-400" /> },
    { label: 'Mini Projects', value: '2', icon: <Globe className="text-purple-400" /> },
    { label: 'Major Project', value: '1 (Group)', icon: <Users className="text-red-400" /> },
  ]

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Gujarati', level: 'Native' },
    { name: 'Marwadi', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card border-white/10 group">
              <img 
                src="/profile_cropped.png" 
                alt="About Me" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 glass-card p-6 border-violet-500/30 bg-violet-500/10 backdrop-blur-xl"
            >
              <p className="text-4xl font-bold text-white leading-none">Grad</p>
              <p className="text-violet-400 text-sm font-semibold uppercase tracking-wider">2026 Aspirant</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-widest flex items-center gap-2">
                <User size={18} /> About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate Developer <br /> 
                <span className="text-slate-500 text-3xl font-medium">with a focus on innovation.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Hello! I'm a Frontend Web Developer currently completing my final year of BCA. 
                I don't just write code; I build digital experiences with a deep focus on UI/UX and performance. 
                My journey started with a simple "Hello World" in 2023, and today I'm obsessed with modern React ecosystems 
                and clean, maintainable CSS.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mt-4">
                As a student, I've spent thousands of hours self-learning, building personal projects, and 
                contributing to open-source ideas. I'm a fast learner who stays up-to-date with the latest 
                web standards, and I'm looking for my first professional break to show my potential.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pb-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 text-center border-white/5 hover:border-violet-500/20 transition-all">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Languages Known</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <div key={index} className="px-4 py-2 glass-card border-white/5 bg-violet-500/5 flex flex-col items-center min-w-[100px]">
                    <span className="text-white font-bold text-sm">{lang.name}</span>
                    <span className="text-violet-400 text-[10px] uppercase font-bold tracking-tighter">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-primary">
              Learn More About My Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
