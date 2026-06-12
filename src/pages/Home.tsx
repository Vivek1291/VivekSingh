import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Zap, Users, ExternalLink, Download } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    { icon: Code, label: 'Clean Code', desc: 'Well-structured, maintainable code' },
    { icon: Zap, label: 'Performance', desc: '40% faster load times' },
    { icon: Users, label: 'Leadership', desc: 'Mentoring engineers' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Build Stunning</span>
              <span className="block text-gradient">Frontend Experiences</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Senior Frontend Engineer with 8+ years building real-time systems, optimizing performance, and leading technical teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.a
              href={`${import.meta.env.BASE_URL}/vivek-resume.pdf`}
              
              download="vivek-resume.pdf"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { number: '8+', label: 'Years' },
              { number: '50k+', label: 'Users' },
              { number: '6', label: 'Companies' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ y: -10, borderColor: 'rgb(59, 130, 246)' }}
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title mb-4">Why Work With Me</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Combining technical excellence with practical solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  className="card"
                  variants={itemVariants}
                  whileHover={{ y: -10, borderColor: 'rgb(59, 130, 246)' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.label}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Real applications built at scale</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: 'Web SCADA++',
                desc: 'Real-time industrial dashboard',
                tech: ['React', 'SSE', 'TypeScript'],
              },
              {
                title: 'Component Library',
                desc: 'Production-grade design system',
                tech: ['React', 'Jest', 'Storybook'],
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="card"
                variants={itemVariants}
                whileHover={{ y: -10, borderColor: 'rgb(59, 130, 246)' }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
              See All Projects <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto card text-center border-2 border-blue-500/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to collaborate?</h2>
          <p className="text-lg text-slate-300 mb-8">Let's discuss your project and create something amazing together.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}
