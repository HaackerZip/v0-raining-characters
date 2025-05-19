"use client"

import { useState, useEffect, useCallback } from "react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
  opacity: number
}

const RainingLetters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const charCount = 200
    const newCharacters: Character[] = []

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    return newCharacters
  }, [])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  useEffect(() => {
    let animationFrameId: number

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
              Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length)
            ],
          }),
        })),
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }

    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {characters.map((char, index) => (
        <span
          key={index}
          className="absolute text-xs font-mono text-white/30"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            opacity: char.opacity,
            fontSize: "0.8rem",
          }}
        >
          {char.char}
        </span>
      ))}
    </div>
  )
}

export default RainingLetters
