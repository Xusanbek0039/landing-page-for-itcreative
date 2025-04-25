"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface BinaryBackgroundProps {
  className?: string
}

export function BinaryBackground({ className = "" }: BinaryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Binary rain configuration
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    // Colors based on theme
    const getColors = () => {
      if (resolvedTheme === "dark") {
        return {
          background: "rgba(0, 20, 0, 0.05)",
          text: "rgba(0, 255, 70, 0.3)",
          highlight: "rgba(0, 255, 70, 0.9)",
        }
      } else {
        return {
          background: "rgba(240, 255, 240, 0.05)",
          text: "rgba(0, 100, 0, 0.2)",
          highlight: "rgba(0, 130, 0, 0.8)",
        }
      }
    }

    // Animation loop
    const draw = () => {
      const colors = getColors()

      // Semi-transparent background to create fade effect
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      // Draw binary characters
      for (let i = 0; i < drops.length; i++) {
        // Random binary character (0 or 1)
        const text = Math.random() > 0.5 ? "0" : "1"

        // Highlight the first character in each column
        if (drops[i] * fontSize < fontSize) {
          ctx.fillStyle = colors.highlight
        } else {
          ctx.fillStyle = colors.text
        }

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Move drops down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Run animation
    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mounted, resolvedTheme])

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 h-full w-full ${className}`} />
}
