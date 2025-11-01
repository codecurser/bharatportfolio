"use client"

import { useEffect, useState } from "react"

export default function SectionScroll() {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
      <div className="h-32 w-1 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-cyan-400 to-purple-400 transition-all duration-300"
          style={{ height: `${Math.min(scrollPos / 10, 100)}%` }}
        />
      </div>
    </div>
  )
}
