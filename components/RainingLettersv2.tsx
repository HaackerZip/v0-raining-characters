// "use client"

// import { useEffect, useRef } from "react"

// const RainingLetters = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     // Set canvas dimensions
//     const setCanvasDimensions = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     setCanvasDimensions()
//     window.addEventListener("resize", setCanvasDimensions)

//     // Binary characters
//     const binaryChars = "01"

//     // Create drops
//     const fontSize = 14
//     const columns = Math.floor(canvas.width / fontSize)
//     const drops: number[] = []

//     // Initialize drops
//     for (let i = 0; i < columns; i++) {
//       drops[i] = Math.floor(Math.random() * -canvas.height)
//     }

//     // Drawing function
//     const draw = () => {
//       // Black semi-transparent background to create fade effect
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       // Set text color and font
//       ctx.fillStyle = "rgba(0, 255, 0, 0.3)" // Matrix green with transparency
//       ctx.font = `${fontSize}px monospace`

//       // Draw characters
//       for (let i = 0; i < drops.length; i++) {
//         // Random character
//         const char = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length))

//         // Draw the character
//         ctx.fillText(char, i * fontSize, drops[i] * fontSize)

//         // Move drops down
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0
//         }
//         drops[i]++
//       }
//     }

//     // Animation loop
//     const interval = setInterval(draw, 50)

//     return () => {
//       clearInterval(interval)
//       window.removeEventListener("resize", setCanvasDimensions)
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" />
// }

// export default RainingLetters
