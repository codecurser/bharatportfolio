"use client"
import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"
import DSAShowcase from "@/components/dsa-showcase"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Mobile Oasis",
      subtitle: "iOS Development",
      icon: "🌴",
      skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine", "Async/Await"],
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Ancient Wisdom",
      subtitle: "Data Structures & Algorithms",
      icon: "📜",
      skills: ["Arrays", "Trees", "Graphs", "Sorting", "Dynamic Programming", "Recursion"],
      color: "from-amber-500 to-yellow-600",
    },
    {
      title: "Caravan Tools",
      subtitle: "Backend & Development",
      icon: "⚙️",
      skills: ["REST APIs", "Firebase", "Git", "Xcode", "CocoaPods", "SPM"],
      color: "from-orange-600 to-red-700",
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
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-4">
          THE JOURNEY
        </h2>
        <p className="text-amber-400/80 text-lg italic">Skills forged in the heat of innovation, refined by the sands of time</p>
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
        className="max-w-4xl mx-auto mt-16 p-8 bg-amber-950/30 border border-orange-500/30 rounded-xl backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
          <span className="text-3xl">✨</span> Desert Mastery
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-amber-400 font-bold mb-3">🧩 Problem Solving</h4>
            <ul className="space-y-2 text-amber-200/80">
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> LeetCode: 500+ problems solved
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> Competitive Programming
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> System Design
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 font-bold mb-3">🏜️ iOS Excellence</h4>
            <ul className="space-y-2 text-amber-200/80">
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> App Architecture Patterns
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> Performance Optimization
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">▸</span> Testing & Debugging
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
