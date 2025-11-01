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
      className="w-full max-w-6xl mx-auto text-center px-6 py-20 md:py-32"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse" />
          <h1 className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 tracking-tighter mb-2 animate-sun-pulse">
            BHARAT
          </h1>
        </div>
        <p className="text-amber-500/60 text-sm mt-2 italic">Journey Through the Digital Dunes</p>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
          iOS Developer & Algorithm Explorer
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
        <div className="bg-amber-950/20 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-10">
          <p className="text-lg md:text-xl text-amber-200/90 leading-relaxed mb-6">
            From the golden sands of <span className="text-orange-400 font-semibold">Jaisalmer</span>, where ancient forts stand testament to timeless craftsmanship, 
            I bring the same dedication to digital creation.
          </p>
          <p className="text-base md:text-lg text-amber-300/80 leading-relaxed">
            Like a master craftsman building intricate <span className="text-amber-400 italic">havelis</span>, I architect iOS experiences with Swift—each function 
            a carefully carved stone, each algorithm a pathway through the desert of complexity, leading users to oases of seamless interaction.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 140, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-amber-50 font-bold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            🏜️ Begin the Journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border-2 border-orange-500/70 text-orange-400 font-bold rounded-xl hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300"
        >
          📜 View Scroll
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="mt-16 flex justify-center"
      >
        <div className="text-orange-400/60 text-sm">↓ Journey deeper into the desert</div>
      </motion.div>

      {/* Desert relics - Tech skills */}
      <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-3 justify-center">
        {["Swift", "iOS", "SwiftUI", "Data Structures", "Algorithms"].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 140, 0, 0.5)" }}
            className="px-3 py-1 bg-amber-950/50 border border-orange-500/50 rounded-full text-sm text-amber-300 backdrop-blur-sm hover:border-orange-400 transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}
