"use client"

import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  icon: string
  features: string[]
  gradient: string
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={projectVariants}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer relative group"
    >
      {/* Glow background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-300`}
      />

      {/* Project card */}
      <div className="relative bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-cyan-400/10">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-4xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.icon}
          </div>
          <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-cyan-300 font-bold">Featured</span>
        </div>

        <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
          {project.title}
        </h3>

        <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 bg-slate-800/50 rounded text-xs text-cyan-300 border border-cyan-400/30 hover:border-cyan-300/60 transition-all"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Key Features</span>
            <span className={`text-cyan-400 group-hover:translate-x-1 transition-transform`}>→</span>
          </div>
          <div className="mt-2 space-y-1">
            {project.features.map((f) => (
              <div key={f} className="text-xs text-slate-400">
                ✓ {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
