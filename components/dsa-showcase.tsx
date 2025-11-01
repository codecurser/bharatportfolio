"use client"
import { motion } from "framer-motion"

export default function DSAShowcase() {
  const algorithms = [
    {
      name: "Sorting Algorithms",
      topics: ["Merge Sort", "Quick Sort", "Heap Sort", "Tim Sort"],
      complexity: "O(n log n)",
      color: "from-cyan-400 to-blue-400",
    },
    {
      name: "Graph Algorithms",
      topics: ["BFS", "DFS", "Dijkstra", "Union-Find"],
      complexity: "O(V + E)",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Dynamic Programming",
      topics: ["Memoization", "Tabulation", "DP Patterns"],
      complexity: "Variable",
      color: "from-green-400 to-cyan-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mt-20"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-2">
          DSA Mastery
        </h3>
        <p className="text-slate-400">Deep expertise in core algorithms and problem-solving techniques</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {algorithms.map((algo) => (
          <motion.div
            key={algo.name}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(34, 211, 238, 0.2)" }}
            className="relative group"
          >
            {/* Glow background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${algo.color} rounded-lg opacity-0 group-hover:opacity-15 blur-lg transition-all duration-300`}
            />

            {/* Card content */}
            <div className="relative bg-slate-900/50 border border-slate-800/50 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all">
              <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${algo.color} mb-4`}>
                {algo.name}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Core Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {algo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-slate-800/50 border border-slate-700/50 rounded text-cyan-300 hover:border-cyan-400/50 transition-all"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Time Complexity</p>
                  <p
                    className={`font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${algo.color}`}
                  >
                    {algo.complexity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
