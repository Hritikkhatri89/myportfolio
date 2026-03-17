import { Github, Linkedin, Mail, Twitter, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/results' },
    { name: 'Internship', path: '/internship' },
    { name: 'Projects', path: '/projects' },
  ]

  const socials = [
    { icon: <Github size={20} />, link: 'https://github.com/Hritikkhatri89', label: 'Github' },
    { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/hritik-khatri-171543379', label: 'LinkedIn' },
    { icon: <Mail size={20} />, link: 'mailto:rititkhatri51@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent underline-none">
              PORTFOLIO.
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Frontend Developer specializing in building exceptional digital experiences. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-violet-400 flex items-center gap-2 transition-colors group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-violet-400" />
                <span>rititkhatri51@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Available for new projects</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} PORTFOLIO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
