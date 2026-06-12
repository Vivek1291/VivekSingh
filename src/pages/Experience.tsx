import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'DigitalPaani',
      role: 'Frontend Lead / Senior Frontend Engineer',
      period: 'Oct 2024 - Nov 2025',
      highlights: [
        'Owned frontend architecture for Web SCADA++, handling 100s+ concurrent data streams',
        'Engineered React + SSE rendering pipeline with sub-second latency',
        'Improved load time by 40% through code splitting and optimization',
        'Established CI/CD pipelines using GitHub Actions',
        'Mentored team on real-time UI patterns and performance optimization'
      ]
    },
    {
      company: 'Done Deal',
      role: 'Senior Software Engineer (Founding Frontend Engineer)',
      period: 'May 2023 - July 2024',
      highlights: [
        'Built entire frontend stack from scratch using React, Redux Toolkit, TypeScript',
        'Designed production-grade component library (30-40% effort reduction)',
        'Mentored 2+ junior engineers and established code review standards',
        'Created architectural documentation (ADRs) for key decisions',
        'Set testing and performance standards adopted by team'
      ]
    },
    {
      company: 'Dotpe',
      role: 'Senior Software Engineer',
      period: 'Nov 2020 - May 2023',
      highlights: [
        'Led frontend for loyalty platform serving 50,000+ merchants',
        'Built POS billing application used at 5,000+ locations',
        'Architected COVID-era features (contactless ordering) in 2-week timeline',
        'Resolved high-severity production issues improving stability',
        'Collaborated with product/design teams on scalable solutions'
      ]
    },
    {
      company: 'Healthkart',
      role: 'Software Engineer',
      period: 'July 2019 - April 2020',
      highlights: ['React components', 'SEO optimization', 'AMP pages', 'Bug resolution'],
    },
    {
      company: 'SoftSolutionZone',
      role: 'Frontend Developer',
      period: 'June 2018 - May 2019',
      highlights: ['Angular components', 'Routing implementation', 'Responsive design', 'Interactive UI'],
    },
    {
      company: 'MithyaLabs',
      role: 'Software Engineer',
      period: 'Sept 2016 - May 2018',
      highlights: ['Multi-project development', 'Cross-browser CSS', 'JS frameworks', 'Responsive layouts'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="section-title mb-4">Experience</h1>
          <p className="text-xl text-slate-300">8+ years of professional frontend development</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="card border-l-4 border-blue-500 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ x: 10, borderLeftColor: 'rgb(34, 197, 94)' }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition">{exp.role}</h3>
                  <p className="text-lg text-blue-400">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400 shrink-0">{exp.period}</span>
              </div>

              <div className="grid sm:grid-cols-1 gap-3">
                {exp.highlights.map((highlight, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-2 text-slate-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: j * 0.05 }}
                  >
                    <ChevronRight className="text-emerald-400 flex-shrink-0" size={18} />
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
                {/* <ul className="grid sm:grid-cols-1 gap-3">
                  {exp.highlights.map((highlight, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center gap-2 text-slate-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: j * 0.05 }}
                    >
                      <li key={j} className="flex gap-3">
                        <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span>{highlight}</span>
                      </li>
                    </motion.div>
                  ))}
                </ul> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
