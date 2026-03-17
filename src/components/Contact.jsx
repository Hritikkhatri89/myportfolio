import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Note: You need to replace these with your actual EmailJS credentials
    // Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        console.log(result.text)
        setStatus('success')
        form.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
    }, (error) => {
        console.log(error.text)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 blur-[100px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-4xl glass-card p-12">
        <div className="text-center mb-12">
          <h2 className="text-violet-400 font-semibold mb-2 tracking-widest uppercase">Contact</h2>
          <h3 className="text-4xl font-bold">Let's Work Together</h3>
          <p className="text-slate-400 mt-4">Fill out the form below and I'll get back to you soon.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none transition-colors text-white" 
                placeholder="Enter your name" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none transition-colors text-white" 
                placeholder="Enter your email" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Message</label>
            <textarea 
              name="message"
              required
              rows="4" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none transition-colors text-white" 
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className={`btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {status === 'idle' && (
              <>
                Send Message <Send size={20} />
              </>
            )}
            {status === 'sending' && 'Sending...'}
            {status === 'success' && (
              <>
                Sent Successfully <CheckCircle2 size={20} className="text-white" />
              </>
            )}
            {status === 'error' && (
              <>
                Error Sending <AlertCircle size={20} />
              </>
            )}
          </button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center text-sm font-medium animate-pulse">
              Thanks! I have received your message.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm font-medium">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
