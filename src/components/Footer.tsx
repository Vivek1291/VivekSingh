import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900/50 border-t border-slate-700/50 py-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-slate-700/50">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gradient mb-2">Vivek Kumar Singh</h3>
            <p className="text-slate-400 text-sm">Senior Frontend Engineer specializing in real-time systems and performance optimization.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-blue-400 transition">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:viveksingh1291@gmail.com"
                className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/vivek-kumar-singh-5737411a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Vivek1291/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 Vivek Kumar Singh. All rights reserved.</p>
          {location.pathname !== '/' && (
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.footer>
  )
}
