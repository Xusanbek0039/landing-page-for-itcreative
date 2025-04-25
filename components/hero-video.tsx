"use client"

import { useEffect, useRef } from "react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      <video ref={videoRef} autoPlay loop muted playsInline className="h-full w-full object-cover">
        <source src="/coding-background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
