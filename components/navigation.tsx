"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Oasis", icon: "🏜️" },
    { id: "skills", label: "Journey", icon: "🗺️" },
    { id: "projects", label: "Artifacts", icon: "⚱️" },
    { id: "contact", label: "Caravan", icon: "🐫" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 ${
        scrollY > 50
          ? "bg-amber-950/70 border-b border-orange-500/40 shadow-lg shadow-orange-500/10"
          : "bg-amber-950/40 border-b border-orange-500/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with advanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 tracking-wider cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setActiveSection("home")}
        >
          ☀️ BR
        </motion.div>

        {/* Desktop Nav with staggered animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex gap-8"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveSection(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group`}
            >
              <span className="mr-2 group-hover:animate-pulse">{item.icon}</span>
              <span
                className={`${
                  activeSection === item.id ? "text-orange-300 font-semibold" : "text-amber-500/70 group-hover:text-orange-300"
                } transition-colors duration-300`}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"
                  transition={{ type: "spring", stiffness: 380, damping: 40 }}
                />
              )}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-400"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Button with rotation animation */}
        <motion.button
          className="md:hidden text-orange-400 text-xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu with staggered list animation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="bg-amber-950/50 backdrop-blur-md border-b border-orange-500/20 p-4 space-y-2"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              onClick={() => {
                setActiveSection(item.id)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-orange-500/10 text-orange-300 border border-orange-500/50"
                  : "text-amber-500/70 hover:text-orange-300 hover:bg-amber-900/30"
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}
