"use client"
import { motion } from "framer-motion"

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full text-center px-4 py-32"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-3xl opacity-40 animate-pulse" />
          <h1 className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 tracking-tighter mb-2 animate-pulse-glow">
            BHARAT
          </h1>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-300">
          iOS Developer & DSA Enthusiast
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8 max-w-2xl mx-auto">
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          Crafting futuristic mobile experiences with Swift and iOS frameworks. Passionate about algorithms, data
          structures, and building scalable applications that push the boundaries of what's possible.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Explore My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
        >
          Download Resume
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="mt-16 flex justify-center"
      >
        <div className="text-cyan-400/60 text-sm">↓ Scroll to explore</div>
      </motion.div>

      {/* Floating tech badges */}
      <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-3 justify-center">
        {["Swift", "iOS", "SwiftUI", "DSA", "Algorithms"].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" }}
            className="px-3 py-1 bg-slate-900/50 border border-cyan-400/50 rounded-full text-sm text-cyan-300 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}
