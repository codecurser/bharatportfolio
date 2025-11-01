"use client"
import { motion } from "framer-motion"

interface SkillCardProps {
  category: {
    title: string
    subtitle?: string
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
      whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(255, 140, 0, 0.3)" }}
      className="relative group"
    >
      {/* Desert glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
      />

      {/* Card */}
      <div className="relative bg-amber-950/50 border border-amber-900/50 rounded-xl p-8 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300">
        <div className={`inline-block text-3xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
          {category.icon}
        </div>

        <h3 className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
          {category.title}
        </h3>
        {category.subtitle && (
          <p className="text-sm text-amber-500/70 italic mb-4">{category.subtitle}</p>
        )}

        <div className="space-y-3">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-amber-200/80 hover:text-orange-300 transition-colors"
            >
              <span className="text-orange-500">→</span>
              <span className="font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill level bar */}
        <div className="mt-6 pt-6 border-t border-amber-900/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-amber-500/70">Mastery</span>
            <span className="text-sm font-bold text-orange-400">95%</span>
          </div>
          <div className="h-1.5 bg-amber-900/50 rounded-full overflow-hidden">
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
