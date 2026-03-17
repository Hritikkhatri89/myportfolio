import { motion } from 'framer-motion'
import { GraduationCap, Award, BarChart3, School } from 'lucide-react'

const Education = () => {
  const schoolEducation = [
    { level: '12th Standard (HSC)', board: 'GSEB (T.N. & T.V. School, Surat)', stream: 'Science', gpa: '41.73%', year: '2021 - 2023', status: 'Passed' },
    { level: '10th Standard (SSC)', board: 'GSEB (Jeevanbharti School, Surat)', stream: 'General', gpa: '45.33%', year: '2017 - 2021', status: 'Passed' },
  ]

  const semesters = [
    { sem: 'Semester 6', gpa: 'On-going', result: 'Current', year: '2026' },
    { sem: 'Semester 5', gpa: '7.27', result: 'Pass', year: '2025' },
    { sem: 'Semester 4', gpa: '6.82', result: 'Pass', year: '2025' },
    { sem: 'Semester 3', gpa: '6.73', result: 'Pass', year: '2024' },
    { sem: 'Semester 2', gpa: '6.27', result: 'Pass', year: '2024' },
    { sem: 'Semester 1', gpa: '6.09', result: 'Pass', year: '2023' },
  ]

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-wider">Academic Profile</h2>
          <h3 className="text-4xl font-bold">My Education</h3>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* College Education (B.Tech) - NOW FIRST */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden bg-white/5 border-white/10"
          >
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-600/10 p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-slate-400 text-sm">Smt Z.S. Patel College of Computer Applications (VNSGU), Surat</p>
                </div>
              </div>
              <div className="hidden md:block">
                <Award className="text-yellow-500/50" size={32} />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Semester</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Year</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">SGPA</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {semesters.map((sem, index) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{sem.sem}</td>
                      <td className="px-6 py-4 text-slate-400">{sem.year}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <BarChart3 size={14} className="text-violet-400" />
                          <span className="text-violet-400 font-bold">{sem.gpa}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${sem.result === 'Pass' || sem.result === 'Current' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'}`}>
                          {sem.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                University: <span className="text-violet-400 font-bold text-lg">VNSGU</span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Current Course
                </div>
              </div>
            </div>
          </motion.div>

          {/* School Education (10th & 12th) - NOW SECOND */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden bg-white/5 border-white/10"
          >
            <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-600/10 p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <School size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Schooling</h4>
                  <p className="text-slate-400 text-sm">Secondary & Higher Secondary Education</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Level</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Board/Stream</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Year</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">Marks/GPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {schoolEducation.map((item, index) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{item.level}</td>
                      <td className="px-6 py-4 text-slate-400">{item.board} ({item.stream})</td>
                      <td className="px-6 py-4 text-slate-400">{item.year}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <BarChart3 size={14} className="text-violet-400" />
                          <span className="text-violet-400 font-bold">{item.gpa}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
