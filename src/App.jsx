import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EducationPage from './pages/EducationPage'
import InternshipPage from './pages/InternshipPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'

const ScrollToHash = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return null
}

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-[#020617]">
        <ScrollToHash />
        {/* Background Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2"></div>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/results" element={<EducationPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
