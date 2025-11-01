"use client"

import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  tech: string[]
  features: string[]
  gradient: string
  link: string
}

interface ProjectModalProps {
  project?: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) {
    return null
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900/95 border border-cyan-400/50 rounded-xl p-8 max-w-2xl w-full backdrop-blur-md shadow-2xl shadow-cyan-400/10"
          >
            {/* Header */}
            <div className="mb-6">
              <div className={`text-4xl mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </div>
              <p className="text-slate-400 text-sm">{project.description}</p>
            </div>

            {/* Full description */}
            <div className="mb-6 pb-6 border-b border-slate-700">
              <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-cyan-300 font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-800/50 border border-cyan-400/30 rounded-full text-sm text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-cyan-300 font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Close
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                className="flex-1 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all text-center"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
