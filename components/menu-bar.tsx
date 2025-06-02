"use client"

import { motion } from "framer-motion"
import { Bell, Settings, User } from "lucide-react"

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

export function MenuBar() {
  return (
    <motion.nav
      className="w-full max-w-6xl mx-auto p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />

      <div className="flex items-center justify-between w-full px-2">
        {/* Left: Logo */}
        <motion.div className="relative group" whileHover="hover" initial="initial" style={{ perspective: "600px" }}>
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            variants={glowVariants}
            style={{
              background:
                "radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
              borderRadius: "16px",
            }}
          />
          <motion.div className="flex items-center gap-2 px-4 py-2 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-md" /> {/* Placeholder logo */}
            <span className="text-sm font-medium">Influur Pulse</span>
          </motion.div>
        </motion.div>

        {/* Right: Icons */}
        <ul className="flex items-center gap-3 pr-2">
          {/* Notifications */}
          <motion.li>
            <motion.div
              className="relative group"
              whileHover="hover"
              initial="initial"
              style={{ perspective: "600px" }}
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href="#"
                className="px-3 py-2 text-muted-foreground group-hover:text-orange-500 transition-colors rounded-xl"
              >
                <Bell className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.li>

          {/* Settings */}
          <motion.li>
            <motion.div
              className="relative group"
              whileHover="hover"
              initial="initial"
              style={{ perspective: "600px" }}
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href="#"
                className="px-3 py-2 text-muted-foreground group-hover:text-green-500 transition-colors rounded-xl"
              >
                <Settings className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.li>

          {/* Profile */}
          <motion.li>
            <motion.div
              className="relative group"
              whileHover="hover"
              initial="initial"
              style={{ perspective: "600px" }}
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background:
                    "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href="#"
                className="inline-flex items-center gap-1 px-4 py-2 text-muted-foreground group-hover:text-red-500 transition-colors rounded-xl"
              >
                <User className="h-5 w-5" />
                <span className="text-sm">Profile</span>
              </motion.a>
            </motion.div>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}
