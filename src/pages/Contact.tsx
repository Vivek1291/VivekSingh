import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'viveksingh1291@gmail.com', link: 'mailto:viveksingh1291@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'vivek-kumar-singh-5737411a2', link: 'https://www.linkedin.com/in/vivek-kumar-singh-5737411a2/' },
    { icon: Github, label: 'GitHub', value: '@Vivek1291', link: 'https://github.com/Vivek1291/' },
    { icon: Phone, label: 'Phone', value: '+91-9650037240', link: 'tel:+919650037240' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="section-title mb-4">Let's Connect</h1>
          <p className="text-xl text-slate-300">Always open to interesting opportunities and conversations</p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="card bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border-2 border-blue-500/30 text-center mb-16 p-12"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgb(59, 130, 246)' }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, want to discuss frontend architecture, or just want to say hello, feel free to reach out!
          </p>
          <motion.a
            href="mailto:viveksingh1291@gmail.com"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <motion.a
                key={i}
                href={method.link}
                target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
                rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                className="card group"
                variants={itemVariants}
                whileHover={{ y: -10, borderColor: 'rgb(59, 130, 246)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-4 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-blue-400 group-hover:text-blue-300" size={28} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{method.label}</h3>
                    <p className="text-slate-400">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Info */}
        <motion.div
          className="card text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-4">About Working Together</h3>
          <p className="text-slate-300 mb-4">
            Based in India and available for remote opportunities. I typically respond within 24 hours.
          </p>
          <p className="text-slate-400">
            Interested in long-term collaborations, interesting technical challenges, and mentorship opportunities.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
