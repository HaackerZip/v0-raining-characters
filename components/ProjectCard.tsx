"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import GlitchText from "./GlitchText"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const ProjectCard = ({ title, description, tags, image, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-black border border-white/10 rounded-md transition-all duration-300",
        isHovered && "border-white/30",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4 relative">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10",
              isHovered && "opacity-40 transition-opacity duration-300",
            )}
          />
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={cn(
              "w-full h-48 object-cover rounded grayscale transition-all duration-500",
              isHovered && "grayscale-0 scale-105",
            )}
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-mono mb-2">{isHovered ? <GlitchText text={title} /> : title}</h3>
          <p className="text-white/70 text-sm mb-4 font-mono">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-white/5 text-white/60 rounded font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={link}
          className={cn(
            "inline-flex items-center text-sm font-mono text-white/70 hover:text-white transition-colors",
            isHovered && "text-white",
          )}
        >
          Ver proyecto <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 animate-glitch-h" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 animate-glitch-h" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-white/30 animate-glitch-v" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-white/30 animate-glitch-v" />
        </div>
      )}
    </div>
  )
}

export default ProjectCard
