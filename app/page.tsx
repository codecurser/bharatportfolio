"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

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
    <main className="w-full h-screen overflow-hidden relative">
      {/* Real Desert Background Image - Base Layer */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80')`,
          filter: 'brightness(0.4) contrast(1.1)',
        }}
      />
      
      {/* Desert texture overlay */}
      <div 
        className="fixed inset-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Warm gradient overlay for color correction */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-900/40 via-orange-900/30 to-yellow-900/40" />
      
      {/* Radial sun glow */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
      
      {/* Layered Desert Images for Depth */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Far dunes layer with parallax */}
        <div 
          className="absolute bottom-0 w-full h-2/5 opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
        
        {/* Sand texture overlay */}
        <div 
          className="absolute bottom-0 w-full h-1/3 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          }}
        />
        
        {/* Heat shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent animate-heat-wave" />
        
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      </div>
      
      {/* Jaisalmer Desert Pattern Overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(218, 165, 32, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 140, 0, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(244, 164, 96, 0.12) 0%, transparent 45%)
          `,
        }} />
      </div>
      
      {/* Desert Sand Dunes SVG Pattern */}
      <div className="fixed bottom-0 left-0 right-0 h-64 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,100 Q300,20 600,80 T1200,60 L1200,200 L0,200 Z" fill="url(#sandGradient1)" opacity="0.6" />
          <path d="M0,120 Q200,60 500,100 T1000,90 T1200,110 L1200,200 L0,200 Z" fill="url(#sandGradient2)" opacity="0.5" />
          <path d="M0,140 Q400,100 800,130 T1200,150 L1200,200 L0,200 Z" fill="url(#sandGradient3)" opacity="0.7" />
          <defs>
            <linearGradient id="sandGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C19A6B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B7355" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="sandGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D2691E" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A0522D" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="sandGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DEB887" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#BC8F8F" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Jaisalmer Fort Silhouette */}
      <div className="fixed bottom-0 left-0 right-0 h-48 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path d="M0,150 L200,150 L200,120 L220,100 L240,120 L240,150 L400,150 L400,110 L430,80 L460,110 L460,150 L600,150 L600,100 L640,60 L680,100 L680,150 L900,150 L900,130 L920,110 L940,130 L940,150 L1200,150 L1200,150 Z" 
                fill="#8B4513" opacity="0.5" />
        </svg>
      </div>

      {/* Content with desert overlay */}
      <div className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Chapter 1: The Oasis */}
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* Story Divider */}
        <div className="relative py-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-orange-500/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-transparent via-amber-900/80 to-transparent px-8 py-2 text-amber-500/60 text-sm italic">
              ✦ The Journey Begins ✦
            </span>
          </div>
        </div>

        {/* Chapter 2: The Journey */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <SkillsSection />
        </section>

        {/* Story Divider */}
        <div className="relative py-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-orange-500/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-transparent via-amber-900/80 to-transparent px-8 py-2 text-amber-500/60 text-sm italic">
              ✦ Treasures Discovered ✦
            </span>
          </div>
        </div>

        {/* Chapter 3: The Artifacts */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <ProjectsSection />
        </section>

        {/* Story Divider */}
        <div className="relative py-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-orange-500/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-transparent via-amber-900/80 to-transparent px-8 py-2 text-amber-500/60 text-sm italic">
              ✦ Join the Caravan ✦
            </span>
          </div>
        </div>

        {/* Chapter 4: The Caravan */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <ContactSection />
        </section>
      </div>

      {/* Desert cursor glow effect */}
      <div
        className="fixed pointer-events-none w-8 h-8 rounded-full border-2 border-orange-400/50 z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 15px rgba(255, 140, 0, 0.5)",
        }}
      />
    </main>
  )
}
