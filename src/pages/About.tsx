import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="max-w-7xl mx-auto mb-20">
        <h1 className="section-title mb-4">About Me</h1>
        <p className="text-xl text-slate-300">Frontend Engineer | Technical Leader | Performance Enthusiast</p>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a Senior Frontend Engineer with 8+ years of hands-on experience building scalable, performance-critical React applications. My passion is creating beautiful, fast, and intuitive user interfaces.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I specialize in real-time data visualization, component architecture, and technical leadership. I believe great code is clean, well-tested, and easy to maintain.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            When I'm not coding, I enjoy contributing to open source, writing technical articles, and mentoring junior developers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid gap-6">
          {[
            { title: 'Core Values', items: ['Code quality', 'Performance', 'UX', 'Learning', 'Teamwork'] },
            { title: 'Why I Stand Out', items: ['Founding engineer', 'Real-time expertise', 'Performance optimization', 'Mentorship', 'Large-scale design'] },
          ].map((section, i) => (
            <motion.div
              key={i}
              className="card"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgb(59, 130, 246)' }}
            >
              <h3 className="text-xl font-bold text-gradient mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <motion.span className="text-emerald-400 font-bold">✓</motion.span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
