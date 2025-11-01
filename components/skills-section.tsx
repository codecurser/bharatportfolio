"use client"
import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"
import DSAShowcase from "@/components/dsa-showcase"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "iOS Development",
      icon: "◆",
      skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine", "Async/Await"],
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Data Structures & Algorithms",
      icon: "■",
      skills: ["Arrays", "Trees", "Graphs", "Sorting", "Dynamic Programming", "Recursion"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Backend & Tools",
      icon: "●",
      skills: ["REST APIs", "Firebase", "Git", "Xcode", "CocoaPods", "SPM"],
      color: "from-green-400 to-cyan-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="w-full px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4">
          SKILLS & EXPERTISE
        </h2>
        <p className="text-slate-400 text-lg">Mastering the art of code and algorithms</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <SkillCard key={category.title} category={category} index={idx} />
        ))}
      </motion.div>

      <DSAShowcase />

      {/* Advanced topics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16 p-8 bg-slate-900/30 border border-purple-500/30 rounded-xl backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-3">
          <span className="text-3xl">◈</span> Advanced Specializations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-cyan-300 font-bold mb-3">Problem Solving</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-cyan-400">▸</span> LeetCode: 500+ problems solved
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">▸</span> Competitive Programming
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">▸</span> System Design
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-300 font-bold mb-3">iOS Excellence</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-purple-400">▸</span> App Architecture Patterns
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">▸</span> Performance Optimization
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">▸</span> Testing & Debugging
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
