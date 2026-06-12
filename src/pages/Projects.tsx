import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);


  const projects = [
    {
      title: 'Web SCADA++',
      desc: 'Real-time industrial IoT dashboard handling 100s+ concurrent data streams',
      fullDesc: 'A browser-based SCADA platform for industrial plant monitoring with live sensor data streaming across 100s+ concurrent data points. Handles real-time data visualization with sub-second latency.',
      tech: ['React', 'websocket', 'TypeScript', 'Redux', 'Vite', 'React Query', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Sentry', 'AWS', 'GitHub Actions'],
      impact: '40% faster | Sub-second latency',
      achievements: [
        'Engineered React + SSE pipeline for high-frequency updates',
        'Implemented batching strategies to prevent render thrashing',
        'Virtualized large datasets for optimal performance',
        'Established performance monitoring and budgets',
        'Reduced initial load time from 2.4s to 1.4s'
      ]
    },
    {
      title: 'Component Library',
      desc: 'Production-grade UI system with TypeScript and comprehensive tests',
      fullDesc: 'Built from scratch with TypeScript contracts, comprehensive Jest test coverage, and Storybook documentation. This component library reduced development effort across all projects.',
      tech: ['React', 'TypeScript', 'Jest', 'Storybook', 'Redux toolkit', 'Sentry', 'Posthog', 'Jenkins'],
      impact: '30-40% effort reduction',
      achievements: [
        'Designed compound component patterns for flexibility',
        'Established TypeScript prop contracts for type safety',
        'Created comprehensive Jest + React Testing Library test suite',
        'Built Storybook documentation for team collaboration',
        'Achieved 100% test coverage on core components'
      ]
    },
    {
      title: 'Workflow Designer',
      desc: 'No-code drag-and-drop editor for non-technical users',
      fullDesc: 'Interactive React-based drag-and-drop editor enabling non-technical teams to model plant logic and create Excel-style formulas without coding.',
      tech: ['React', 'React Query','jointJs', 'TypeScript', 'Zustand', 'Vite', 'Node.js', 'Express', 'MongoDB'],
      impact: 'Reduced config time',
      achievements: [
        'Implemented complex drag-and-drop interactions',
        'Built formula evaluation engine in JavaScript',
        'Created intuitive UI for non-technical users',
        'Enabled real-time preview and validation',
        'Supported 50+ plant configuration workflows'
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="section-title mb-4">Featured Projects</h1>
          <p className="text-xl text-slate-300">Real-world applications built at scale</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card group h-full"
              variants={itemVariants}
              whileHover={{ y: -20, borderColor: 'rgb(59, 130, 246)' }}
            >
              {/* Header */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6">{project.desc}</p>

              {/* Impact */}
              <div className="bg-slate-700/50 rounded-lg p-3 mb-6">
                <p className="text-xs text-slate-400 mb-1">Impact</p>
                <p className="text-sm text-emerald-400 font-medium">{project.impact}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Footer */}
              {/* <div className="border-t border-slate-700/50 pt-4 mt-auto">
                <motion.button
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  whileHover={{ x: 5 }}
                >
                  View Details <ExternalLink size={16} />
                </motion.button>
              </div> */}
              <div className="border-t border-slate-700/50 pt-4 mt-auto">
                <motion.button
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </motion.div>
  )
}
