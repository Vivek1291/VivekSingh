import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { X } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    desc: string
    fullDesc: string
    tech: string[]
    impact: string
    achievements: string[]
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="z-50 w-full max-w-2xl mx-4"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-6 flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-white/20 rounded-lg transition"
                  >
                    <X size={24} className="text-white" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-slate-300 text-lg leading-relaxed">{project.fullDesc}</p>
                  </motion.div>

                  {/* Impact Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="bg-emerald-600/20 border border-emerald-500/30 rounded-xl p-4"
                  >
                    <p className="text-sm text-emerald-400 font-semibold mb-1">Impact</p>
                    <p className="text-emerald-200 font-semibold">{project.impact}</p>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-white font-bold mb-4 text-lg">Key Achievements</h3>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          className="flex gap-3 items-start text-slate-300"
                        >
                          <span className="text-emerald-400 font-bold mt-1">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h3 className="text-white font-bold mb-4 text-lg">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:border-blue-500 transition"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Footer with action button */}
                <div className="bg-slate-900/50 border-t border-slate-700/50 px-8 py-6 flex justify-end gap-4">
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
