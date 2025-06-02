"use client"

import { useEffect, useRef, useState } from "react"
import CardGrid from "@/components/card/card-grid"

export default function ResultPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastScrollTop = useRef(0)
  const [videoStopped, setVideoStopped] = useState(false)
  const cardSectionRef = useRef<HTMLDivElement>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current
      const cardSection = cardSectionRef.current
      if (!video || !cardSection) return

      const currentScroll = window.scrollY
      const cardSectionTop = cardSection.offsetTop - window.innerHeight * 0.2

      // Hide scroll indicator after scrolling a bit
      if (currentScroll > 100 && showScrollIndicator) {
        setShowScrollIndicator(false)
      } else if (currentScroll <= 100 && !showScrollIndicator) {
        setShowScrollIndicator(true)
      }

      // Check if we've reached the card section
      if (currentScroll >= cardSectionTop) {
        if (!videoStopped) {
          // Just pause the video at its current position
          video.pause()
          setVideoStopped(true)
        }
      } else {
        if (videoStopped) {
          setVideoStopped(false)
        }

        // Simple scroll-based playback
        if (currentScroll > lastScrollTop.current) {
          // Scrolling down - play forward
          video.play().catch(() => {})
        } else if (currentScroll < lastScrollTop.current) {
          // Scrolling up - pause (don't try to reverse)
          video.pause()
        }
      }

      lastScrollTop.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [videoStopped, showScrollIndicator])

  return (
    <>
      <div className="min-h-[200vh] w-full relative overflow-hidden">
        {/* Video full screen initially */}
        <div className="relative">
          <video
            ref={videoRef}
            src="/ariana-glambot.mp4"
            className="fixed top-0 left-0 w-full h-screen object-cover z-10"
            muted
            playsInline
            preload="auto"
          />

          {/* Subtle bottom gradient overlay */}
          <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-rose-950/30 via-rose-900/20 to-transparent z-15 pointer-events-none"></div>
        </div>

        {/* Name + Description */}
        <div className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
          <h1 className="text-2xl font-bold">Ariana Grande</h1>
          <p className="text-sm text-white/80">Grammy-winning pop icon, captured in slow-motion glamour.</p>
        </div>

        {/* Scroll Down Indicator */}
        {showScrollIndicator && (
          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
            <span className="text-white text-base font-semibold mb-3">Scroll Down</span>
            <div className="w-7 h-12 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Generated Results */}
        <div className="absolute top-[110vh] left-1/2 w-1/2 z-30 p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">AI-Generated Campaign</h2>
          <p className="text-white/80">
            Based on Ariana's current audience and music trends, Pulse AI recommends this influencer mix and campaign
            strategy...
          </p>
        </div>
      </div>

      {/* Seamless Gradient Transition Section */}
      <div className="relative z-30 h-60 bg-gradient-to-b from-transparent via-rose-950/40 via-rose-900/30 to-zinc-900/80"></div>

      {/* Card Grid Section with Soft Background - This is where video stops */}
      <div
        ref={cardSectionRef}
        className="relative z-30 bg-gradient-to-b from-zinc-900/80 via-zinc-800/60 to-zinc-900/90 py-20 min-h-screen"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <CardGrid
          gridTitle="AI-Recommended Influencers"
          items={[
            {
              title: "Fashion Nova Muse",
              subtitle: "Trendy Gen Z fit reviewer",
              image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Indie Beauty Creator",
              subtitle: "Known for high-glam GRWM videos",
              image: "https://assets.lummi.ai/assets/QmXFtkNH6GJy581VwChHZeQF6qfQM9bkLhF2kDh1px5qKB?auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Trend Dancer",
              subtitle: "Viral TikTok choreographer",
              image:
                "https://www.lummi.ai/api/pro/image/a06ede0d-63fb-4d99-be4c-9ba0840cf779?asset=original&auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Pop Culture Commentator",
              subtitle: "Ariana fanbase crossover potential",
              image: "https://assets.lummi.ai/assets/QmPdy3qFqQF8gDQ6KuuUrRaqez3cbdeaYw3GMrxBynLfGd?auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
          ]}
        />

        {/* Additional content to demonstrate static scrolling */}
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Campaign Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-3xl font-bold text-rose-400 mb-2">2.4M</div>
                <div className="text-white/80">Estimated Reach</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-3xl font-bold text-pink-400 mb-2">8.7%</div>
                <div className="text-white/80">Engagement Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">$45K</div>
                <div className="text-white/80">Campaign Budget</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
