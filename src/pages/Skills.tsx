import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../data/skillsData';
import { skillGroups } from '../data/skillsData'
import { skillThemes } from '../constants/skillThemes';

// import '../styles/Skills.scss';
export default function Skills() {
  // const skillGroups = [
  //   {
  //     category: 'Frontend Frameworks',
  //     iconTheme: {
  //       icon: Monitor,
  //       color: 'cyan'
  //     },
  //     skills: [
  //       { name: 'React.js', icon: '' },
  //       { name: 'Next.js (familiar)', icon: '' },
  //       { name: 'Angular (legacy)', icon: '' },
  //     ]
  //   },
  //   {
  //     category: 'Languages & Core Concepts',
  //     iconTheme: {
  //       icon: Code2,
  //       color: 'amber'
  //     },

  //     skills: [
  //       { name: 'TypeScript', icon: '' }, 
  //       { name: 'JavaScript ES6+', icon: '' },
  //       { name: 'Event Loop', icon: '' },
  //       { name: 'Closures', icon: '' },
  //       { name: 'Async/Await', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'UI & Styling',
  //     iconTheme: {
  //       icon: Palette,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'HTML5', icon: '' },
  //       { name: 'CSS3', icon: '' },
  //       { name: 'SASS', icon: '' },
  //       { name: 'Tailwind CSS', icon: '' },
  //       { name: 'Material UI', icon: '' },
  //       { name: 'Responsive Design', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'State Management & Architecture',
  //     iconTheme: {
  //       icon: Layers3,
  //       color: 'purple',
  //       svgColor: ''
  //     },
  //     skills: [ 
  //       { name: 'Redux Toolkit', icon: '' }, 
  //       { name: 'Context API', icon: '' }, 
  //       { name: 'React Query', icon: '' }, 
  //       { name: 'Zustand', icon: '' } 
  //     ]
  //   },
  //   {
  //     category: 'Build & Tools',
  //     iconTheme: {
  //       icon: Wrench,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'Webpack', icon: '' },
  //       { name: 'Vite', icon: '' },
  //       { name: 'npm', icon: '' },
  //       { name: 'Git', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'Testing & Quality',
  //     iconTheme: {
  //       icon: TestTube,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'Jest', icon: '' },
  //       { name: 'React Testing Library', icon: '' },
  //       { name: 'Unit Testing', icon: '' },
  //       { name: 'Integration Testing', icon: '' },
  //       { name: 'WCAG', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'APIs & Real-Time',
  //     iconTheme: {
  //       icon: PlugZap,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'REST APIs', icon: '' },
  //       { name: 'Server-Sent Events (SSE)', icon: '' },
  //       { name: 'WebSocket', icon: '' },
  //       { name: 'Fetch API', icon: '' },
  //       { name: 'Axios', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'DevOps & CI/CD',
  //     iconTheme: {
  //       icon: GitBranch,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'GitHub Actions', icon: '' },
  //       { name: 'Jenkins', icon: '' },
  //       { name: 'CI/CD Pipelines', icon: '' },
  //       { name: 'Agile/Scrum', icon: '' },
  //       { name: 'Docker (familiar)', icon: '' },
  //       { name: 'AWS (familiar)', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'Monitoring & Performance',
  //     iconTheme: {
  //       icon: Activity,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'Sentry', icon: '' },
  //       { name: 'PostHog', icon: '' },
  //       { name: 'Performance Optimization', icon: '' },
  //       { name: 'Profiling', icon: '' },
  //       { name: 'Bundle Analysis', icon: '' }
  //     ]
  //   },
  //   {
  //     category: 'Backend & Databases (Familiar)',
  //     iconTheme: {
  //       icon: Database,
  //       color: 'emerald'
  //     },
  //     skills: [
  //       { name: 'Node.js', icon: '' },
  //       { name: 'Express.js', icon: '' },
  //       { name: 'MongoDB', icon: '' }
  //     ]
  //   }
  // ]


  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="section-title mb-4">Technical Skills</h1>
          <p className="text-xl text-slate-300">Tools and technologies I master</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillGroups.map((group, i) => {
            const theme =
              skillThemes[group.iconTheme.color];
            const CategoryIcon =
              group.iconTheme.icon
            return (
              <motion.div
                key={i}
                className="card"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgb(59, 130, 246)' }}
              >
                <div className="flex items-center gap-4 mb-8">

                  <div
                    className={`
                      category-icon
                      ${theme.container}
                    `}
                  >
                    <CategoryIcon
                      size={18}
                      className={theme.icon}
                    />
                  </div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {group.category}
                  </h3>

                </div>
                {/* <h3 className="text-xl font-bold text-gradient mb-6">{group.category}</h3> */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return(
                      <motion.span
                        key={skill.name}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          key={skill.name}
                          className="
                          flex
                          items-center
                          gap-4
                        "
                        >
                          <div
                            className={`
                            skill-icon
                            ${theme.container}
                          `}
                          >
                            <SkillIcon
                              size={15}
                              className={theme.icon}
                            />
                          </div>

                          <span
                            className="
                            text-slate-300
                          "
                          >
                            {skill.name}
                          </span>
                        </div>
                      </motion.span>
                    )}
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="card bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gradient mb-8">What Sets Me Apart</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '8+ years of production React experience',
              'Real-time systems expertise (SSE, WebSocket)',
              'Performance optimization at scale',
              'Technical leadership & mentorship',
              'Component-driven architecture',
              'Founding engineer with end-to-end ownership',
              'Production incident resolution',
              'Type-safe development with TypeScript'
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-emerald-400 font-bold mt-1">✓</span>
                <span className="text-slate-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
