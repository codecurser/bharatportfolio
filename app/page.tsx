"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, Environment, OrbitControls, Stars } from "@react-three/drei"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import FloatingOrbs from "@/components/floating-orbs"

function CanvasError({ error }: { error: Error }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="text-center">
        <h2 className="text-cyan-400 text-2xl mb-2">3D Rendering Error</h2>
        <p className="text-slate-400">Please try refreshing the page</p>
      </div>
    </div>
  )
}

function CanvasContent() {
  try {
    return (
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <Environment preset="night" />
        <FloatingOrbs />
      </Canvas>
    )
  } catch (error) {
    return <CanvasError error={error as Error} />
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient])

  if (!isClient) {
    return null
  }

  return (
    <main className="w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <CanvasContent />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </div>

        <div className="min-h-screen flex items-center justify-center py-20">
          <SkillsSection />
        </div>

        <div className="min-h-screen flex items-center justify-center py-20">
          <ProjectsSection />
        </div>

        <div className="min-h-screen flex items-center justify-center py-20">
          <ContactSection />
        </div>
      </div>

      {/* Cursor glow effect */}
      <div
        className="fixed pointer-events-none w-8 h-8 rounded-full border-2 border-cyan-400/50 z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
        }}
      />
    </main>
  )
}
