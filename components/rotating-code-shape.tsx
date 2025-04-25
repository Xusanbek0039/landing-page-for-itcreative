"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Hash, Braces, Terminal } from "lucide-react"

interface RotatingCodeShapeProps {
  className?: string
}

export function RotatingCodeShape({ className = "" }: RotatingCodeShapeProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`relative h-64 w-64 ${className}`}>
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="relative h-full w-full rounded-full border-2 border-dashed border-primary/30">
          <motion.div
            className="absolute -left-3 top-1/2 -translate-y-1/2 transform"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Hash className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -right-3 top-1/2 -translate-y-1/2 transform"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <Braces className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 transform"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <Code className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
          >
            <Terminal className="h-6 w-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Middle rotating ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="relative h-3/4 w-3/4 rounded-full border-2 border-primary/40">
          {/* Binary numbers on the middle ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, index) => (
            <div
              key={degree}
              className="absolute flex h-6 w-6 items-center justify-center text-xs font-mono text-primary/80"
              style={{
                transform: `rotate(${degree}deg) translateX(5rem)`,
              }}
            >
              {index % 2 === 0 ? "0" : "1"}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Inner shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="relative flex h-1/2 w-1/2 items-center justify-center rounded-lg border-2 border-primary bg-primary/10 p-4">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            animate={{ rotateY: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  )
}
