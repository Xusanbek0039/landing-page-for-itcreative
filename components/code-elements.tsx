"use client"

import { motion } from "framer-motion"
import { Brackets, FileCode, GitBranch, Database, Server, Cpu } from "lucide-react"

interface CodeElementProps {
  className?: string
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
}

export function CodeElements({ className = "", position }: CodeElementProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-20 left-10"
      case "top-right":
        return "top-20 right-10"
      case "bottom-left":
        return "bottom-20 left-10"
      case "bottom-right":
        return "bottom-20 right-10"
      case "center-left":
        return "top-1/2 -translate-y-1/2 left-10"
      case "center-right":
        return "top-1/2 -translate-y-1/2 right-10"
      default:
        return ""
    }
  }

  const getIcon = () => {
    const icons = [
      <Brackets key="brackets" className="h-full w-full" />,
      <FileCode key="fileCode" className="h-full w-full" />,
      <GitBranch key="gitBranch" className="h-full w-full" />,
      <Database key="database" className="h-full w-full" />,
      <Server key="server" className="h-full w-full" />,
      <Cpu key="cpu" className="h-full w-full" />,
    ]

    // Select icon based on position to ensure variety
    switch (position) {
      case "top-left":
        return icons[0]
      case "top-right":
        return icons[1]
      case "bottom-left":
        return icons[2]
      case "bottom-right":
        return icons[3]
      case "center-left":
        return icons[4]
      case "center-right":
        return icons[5]
      default:
        return icons[0]
    }
  }

  return (
    <motion.div
      className={`absolute z-0 h-16 w-16 text-primary/30 ${getPositionClasses()} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {getIcon()}
      </motion.div>
    </motion.div>
  )
}
