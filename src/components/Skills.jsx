import { motion } from 'framer-motion'

const Skills = () => {
  const skillsData = [
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Angular",
        "icon": "https://img.icons8.com/color/48/000000/angularjs.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MongoDB Compass",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png" // Reusing MongoDB icon as standard for Compass
    },
    {
        "name": "PHP",
        "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
    },
    {
        "name": "Firebase",
        "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "C Language",
        "icon": "https://img.icons8.com/color/48/000000/c-programming.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "ASP.NET",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-violet-400 font-semibold mb-2 uppercase tracking-wider">Abilities</h2>
          <h3 className="text-4xl font-bold">Technical Skills</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="glass-card p-6 w-36 h-36 flex flex-col items-center justify-center text-center group cursor-default border-white/5 hover:border-violet-500/20"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center transition-transform group-hover:rotate-12">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
