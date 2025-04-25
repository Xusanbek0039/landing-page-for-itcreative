"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    // Add cursor: pointer to all interactive elements
    const style = document.createElement("style")
    style.innerHTML = `
      a, button, [role="button"] {
        cursor: pointer;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
