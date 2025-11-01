"use client"
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactMethods = [
    { icon: "◆", label: "Email", value: "bharat@example.com", link: "mailto:bharat@example.com" },
    { icon: "●", label: "GitHub", value: "github.com/bharatrathore", link: "https://github.com/bharatrathore" },
    { icon: "■", label: "LinkedIn", value: "linkedin.com/in/bharat", link: "https://linkedin.com/in/bharat" },
    { icon: "◇", label: "Twitter", value: "@bharatrathore", link: "https://twitter.com/bharatrathore" },
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate form submission - replace with actual API call if needed
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("[v0] Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
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
          GET IN TOUCH
        </h2>
        <p className="text-slate-400 text-lg">Let's build something amazing together</p>
      </motion.div>

      <motion.div className="max-w-3xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
              required
            />
          </div>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
            required
          />

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-300 text-sm"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300 text-sm"
            >
              Please fill in all fields before sending.
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Contact methods with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-slate-900/50 border border-slate-800/50 rounded-lg text-center hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-3xl text-cyan-400 mb-2"
              >
                {method.icon}
              </motion.div>
              <div className="text-sm font-bold text-cyan-300">{method.label}</div>
              <div className="text-xs text-slate-400 mt-1 truncate hover:text-slate-300 transition-colors">
                {method.value}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 pt-8 border-t border-slate-800 text-center space-y-2"
      >
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-slate-400"
        >
          © 2025 Bharat Rathore. Crafted with passion and code.
        </motion.p>
        <p className="text-sm text-slate-500">Made with React, Three.js, and Framer Motion</p>
      </motion.div>
    </section>
  )
}
