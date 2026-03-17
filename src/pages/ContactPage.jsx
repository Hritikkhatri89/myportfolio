import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react'
import Contact from '../components/Contact'

const ContactPage = () => {
  const contactDetails = [
    {
      icon: <Mail className="text-violet-400" />,
      label: 'Email',
      value: 'rititkhatri51@gmail.com',
      desc: 'Send me an email anytime.'
    },
    {
      icon: <Phone className="text-green-400" />,
      label: 'Phone',
      value: '+91 89800 52655',
      desc: 'Available for calls & WhatsApp.'
    },
    {
      icon: <MapPin className="text-red-400" />,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      desc: 'Open to relocate or remote work.'
    }
  ]

  const socials = [
    { icon: <Github />, label: 'Github', link: 'https://github.com/Hritikkhatri89', color: 'hover:text-white' },
    { icon: <Linkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/hritik-khatri-171543379', color: 'hover:text-blue-500' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-widest">Get in touch</h2>
              <h3 className="text-5xl font-bold mb-6">Contact Details</h3>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? My inbox is always open.
                Feel free to reach out through any of these channels!
              </p>
            </div>

            <div className="grid gap-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4 p-6 glass-card border-white/5 hover:border-violet-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-tighter mb-1">{detail.label}</h4>
                    <p className="text-xl font-bold text-white mb-1">{detail.value}</p>
                    <p className="text-sm text-slate-400">{detail.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`w-14 h-14 rounded-2xl glass-card border-white/5 flex items-center justify-center text-slate-400 ${social.color} transition-all hover:-translate-y-2`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
