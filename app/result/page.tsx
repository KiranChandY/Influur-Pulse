"use client"

import { useEffect, useRef } from "react"

export default function ResultPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current
      if (!video) return

      const currentScroll = window.scrollY

      if (currentScroll > lastScrollTop.current) {
        // scrolling down
        video.play().catch(() => {})
      } else if (currentScroll < lastScrollTop.current) {
        // scrolling up
        video.pause()
      }

      lastScrollTop.current = currentScroll
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
        preload="auto"
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





<div className="relative z-30 bg-black py-16 mt-[120vh] px-6">
  <h2 className="text-3xl font-bold text-white text-center mb-10">
    Recommended Influencers
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        title: "Summer Dress Collection",
        subtitle: "Fit with the latest trends",
        image: "/influencer-1.jpg",
      },
      {
        title: "Autumn Essentials",
        subtitle: "Warm and cozy for the colder months",
        image: "/influencer-2.jpg",
      },
      {
        title: "Winter Collection",
        subtitle: "Colorful for the festive season",
        image: "/influencer-3.jpg",
      },
      {
        title: "Spring Accessories",
        subtitle: "Hidden treasures for the spring season",
        image: "/influencer-4.jpg",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl bg-zinc-900 backdrop-blur-xl border border-zinc-700 shadow-md hover:shadow-lg transition-all duration-300 group"
      >
        <div className="relative h-[320px]">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/90 text-zinc-800 backdrop-blur-md">
            New
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white leading-snug tracking-tight">
              {card.title}
            </h3>
            <p className="text-sm text-zinc-300 line-clamp-2">
              {card.subtitle}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

}
