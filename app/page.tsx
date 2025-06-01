import { AnimatedAIChat } from "@/components/animated-ai-chat"
import { MenuBar } from "@/components/menu-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Fixed Top Nav */}
      <div className="fixed top-4 left-0 w-full flex justify-center z-50">
        <MenuBar />
      </div>

      {/* Chatbot Content */}
      <main className="flex-grow">
        <AnimatedAIChat />
      </main>
    </div>
  )
}
