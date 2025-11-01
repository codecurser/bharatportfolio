"use client"
import { motion } from "framer-motion"

interface SkillCardProps {
  category: {
    title: string
    icon: string
    skills: string[]
    color: string
  }
  index: number
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={categoryVariants}
      whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(34, 211, 238, 0.3)" }}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
      />

      {/* Card */}
      <div className="relative bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
        <div className={`inline-block text-3xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
          {category.icon}
        </div>

        <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
          {category.title}
        </h3>

        <div className="space-y-3">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <span className="text-cyan-400">→</span>
              <span className="font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill level bar */}
        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Proficiency</span>
            <span className="text-sm font-bold text-cyan-300">95%</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className={`h-full bg-gradient-to-r ${category.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
