"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span
      className={cn(
        "relative inline-block font-mono transition-all duration-300",
        isHovered && "digital-glitch",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-text={text}
    >
      {text}
    </span>
  )
}

export default GlitchText
