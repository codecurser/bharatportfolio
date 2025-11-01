"use client"
import HeroContent from "@/components/hero-content"

export default function HeroSection() {
  return (
    <div className="w-full relative">
      {/* Jaisalmer Desert Ambiance - Decorative Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Floating sand particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-amber-400/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400/25 rounded-full animate-sand-drift" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Desert wind lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-sand-drift" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/8 to-transparent animate-sand-drift" style={{ animationDelay: '3s' }} />
        
        {/* Camel caravan silhouette */}
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <div className="flex items-end gap-8">
            <div className="w-12 h-16 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-full" />
            <div className="w-10 h-14 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-full" />
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  )
}

// Removed 3D components for performance
