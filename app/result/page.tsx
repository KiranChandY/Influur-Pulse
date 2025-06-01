"use client"

import { useEffect, useRef } from "react"

export default function ResultPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current
      if (!video) return

      const maxScroll = 1000 // pixels
      const scrollTop = window.scrollY
      const scrollFraction = Math.min(scrollTop / maxScroll, 1)
      const duration = video.duration || 5
      video.currentTime = scrollFraction * duration
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-[200vh] w-full bg-black text-white relative overflow-hidden">
      {/* Video full screen initially */}
      <video
        ref={videoRef}
        src="/ariana-glambot.mp4"
        className="fixed top-0 left-0 w-full h-screen object-cover z-10"
        muted
        playsInline
      />

      {/* Name + Description */}
      <div className="absolute bottom-6 left-6 z-20 bg-black/50 px-4 py-2 rounded-xl">
        <h1 className="text-2xl font-bold">Ariana Grande</h1>
        <p className="text-sm text-white/70">Grammy-winning pop icon, captured in slow-motion glamour.</p>
      </div>

      {/* Generated Results */}
      <div className="absolute top-[110vh] left-1/2 w-1/2 z-30 p-6">
        <h2 className="text-2xl font-bold mb-4">AI-Generated Campaign</h2>
        <p>
          Based on Ariana's current audience and music trends, Pulse AI recommends this influencer mix and campaign strategy...
        </p>
      </div>
    </div>
  )
}
