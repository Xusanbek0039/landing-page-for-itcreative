"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function RobotCursor() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)

    // Only enable on desktop
    if (window.innerWidth < 1024) return

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  if (!mounted || window.innerWidth < 1024) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* Robot SVG */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Robot head */}
          <motion.rect
            x="15"
            y="10"
            width="30"
            height="25"
            rx="4"
            fill="rgba(0, 200, 100, 0.8)"
            stroke="rgba(0, 150, 70, 0.9)"
            strokeWidth="2"
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Robot eyes */}
          <motion.circle
            cx="25"
            cy="20"
            r="3"
            fill="rgba(255, 255, 255, 0.9)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.circle
            cx="35"
            cy="20"
            r="3"
            fill="rgba(255, 255, 255, 0.9)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Robot mouth */}
          <motion.rect
            x="22"
            y="28"
            width="16"
            height="2"
            rx="1"
            fill="rgba(255, 255, 255, 0.9)"
            initial={{ width: 16 }}
            animate={{ width: [16, 10, 16] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Robot antenna */}
          <motion.line
            x1="30"
            y1="10"
            x2="30"
            y2="5"
            stroke="rgba(0, 150, 70, 0.9)"
            strokeWidth="2"
            initial={{ y2: 5 }}
            animate={{ y2: [5, 3, 5] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.circle
            cx="30"
            cy="3"
            r="2"
            fill="rgba(0, 255, 100, 0.9)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Binary data stream from robot */}
          <motion.text
            x="45"
            y="15"
            fill="rgba(0, 200, 100, 0.8)"
            fontSize="8"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            01
          </motion.text>
          <motion.text
            x="45"
            y="25"
            fill="rgba(0, 200, 100, 0.8)"
            fontSize="8"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
          >
            10
          </motion.text>
        </svg>
      </div>
    </motion.div>
  )
}
