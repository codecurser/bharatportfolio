"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import ProjectModal from "@/components/project-modal"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "SwiftWeather Pro",
      description: "Real-time weather app with machine learning predictions",
      tech: ["Swift", "SwiftUI", "CoreLocation", "Charts"],
      icon: "🌴",
      features: ["Real-time data", "ML predictions", "7-day forecast"],
      gradient: "from-orange-500 to-amber-600",
      fullDescription:
        "A comprehensive weather application featuring real-time data from multiple sources, ML-powered predictions, and beautiful visualizations using SwiftUI.",
      link: "#",
    },
    {
      id: 2,
      title: "DataFlow Analytics",
      description: "Complex data visualization with algorithm optimization",
      tech: ["SwiftUI", "Combine", "Algorithms", "CoreData"],
      icon: "📜",
      features: ["Data visualization", "Real-time sync", "DSA implementation"],
      gradient: "from-amber-500 to-yellow-600",
      fullDescription:
        "Advanced analytics platform showcasing optimized algorithms for data processing, real-time synchronization, and interactive visualizations.",
      link: "#",
    },
    {
      id: 3,
      title: "Algorithm Visualizer",
      description: "Interactive app to visualize sorting and pathfinding algorithms",
      tech: ["SwiftUI", "Canvas", "Animation", "Algorithms"],
      icon: "⚱️",
      features: ["10+ algorithms", "Interactive UI", "Step-by-step execution"],
      gradient: "from-orange-600 to-red-700",
      fullDescription:
        "Educational tool featuring interactive visualizations of 10+ sorting and pathfinding algorithms with step-by-step execution and detailed complexity analysis.",
      link: "#",
    },
    {
      id: 4,
      title: "TaskMaster Pro",
      description: "Productivity app with smart task scheduling using DSA",
      tech: ["UIKit", "Firebase", "Algorithms", "Notifications"],
      icon: "⚙️",
      features: ["Smart scheduling", "Sync across devices", "AI suggestions"],
      gradient: "from-yellow-600 to-orange-700",
      fullDescription:
        "Intelligent task management system utilizing advanced algorithms for optimal scheduling, cross-device synchronization, and personalized AI-powered suggestions.",
      link: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          DESERT ARTIFACTS
        </h2>
        <p className="text-amber-400/80 text-lg italic">Treasures unearthed from countless hours of creation</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
        ))}
      </motion.div>

      {/* Project detail modal */}
      <ProjectModal project={projects.find((p) => p.id === selectedProject)} onClose={() => setSelectedProject(null)} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
      >
        {[
          { label: "Projects Built", value: "4+" },
          { label: "Downloads", value: "50K+" },
          { label: "User Rating", value: "4.8★" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-amber-950/30 border border-orange-500/20 rounded-lg p-6 text-center backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
            <div className="text-amber-500/70 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
