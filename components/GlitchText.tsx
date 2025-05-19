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
      <style jsx global>{`
  .digital-glitch {
    position: relative;
    display: inline-block;
    color: white;
    font-weight: bold;
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    animation: glitch-skew 1s infinite linear alternate-reverse;
    transform: skew(0deg);
  }
  
  .digital-glitch::before,
  .digital-glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  .digital-glitch::before {
    left: -2px;
    text-shadow: 1px 0 #ff0000;
    background: black;
    animation: glitch-shift-left 2s infinite alternate-reverse steps(2);
    clip-path: polygon(
      0 20%, 100% 20%, 100% 21%, 0 21%,
      0 33%, 100% 33%, 100% 34%, 0 34%,
      0 49%, 100% 49%, 100% 50%, 0 50%,
      0 62%, 100% 62%, 100% 63%, 0 63%,
      0 82%, 100% 82%, 100% 83%, 0 83%
    );
  }
  
  .digital-glitch::after {
    left: 2px;
    text-shadow: -1px 0 #00ffff;
    background: black;
    animation: glitch-shift-right 3s infinite alternate-reverse steps(2);
    clip-path: polygon(
      0 15%, 100% 15%, 100% 16%, 0 16%,
      0 45%, 100% 45%, 100% 46%, 0 46%,
      0 67%, 100% 67%, 100% 68%, 0 68%,
      0 90%, 100% 90%, 100% 91%, 0 91%
    );
  }
  
  /* Añadimos líneas de interferencia horizontal */
  .digital-glitch::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -1px 0 #ff0000;
    background: repeating-linear-gradient(
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.3) 3px,
      transparent 3px
    );
  }
  
  /* Animación de desplazamiento hacia la izquierda */
  @keyframes glitch-shift-left {
    0% { transform: translateX(0); }
    10% { transform: translateX(-2px); }
    20% { transform: translateX(-4px); }
    30% { transform: translateX(-2px); }
    40% { transform: translateX(-6px); }
    50% { transform: translateX(-2px); }
    60% { transform: translateX(-8px); }
    70% { transform: translateX(-3px); }
    80% { transform: translateX(-5px); }
    90% { transform: translateX(-1px); }
    100% { transform: translateX(0); }
  }
  
  /* Animación de desplazamiento complementaria */
  @keyframes glitch-shift-right {
    0% { transform: translateX(0); }
    10% { transform: translateX(2px); }
    20% { transform: translateX(1px); }
    30% { transform: translateX(3px); }
    40% { transform: translateX(1px); }
    50% { transform: translateX(4px); }
    60% { transform: translateX(2px); }
    70% { transform: translateX(5px); }
    80% { transform: translateX(3px); }
    90% { transform: translateX(2px); }
    100% { transform: translateX(0); }
  }
  
  /* Animación de inclinación para simular interferencia */
  @keyframes glitch-skew {
    0% { transform: skew(0deg); }
    10% { transform: skew(-0.5deg); }
    20% { transform: skew(0.8deg); }
    30% { transform: skew(0deg); }
    40% { transform: skew(-0.3deg); }
    50% { transform: skew(0.5deg); }
    60% { transform: skew(0deg); }
    70% { transform: skew(0.2deg); }
    80% { transform: skew(-0.4deg); }
    90% { transform: skew(0.3deg); }
    100% { transform: skew(0deg); }
  }
  
  @keyframes digital-glitch-anim-1 {
    0%, 100% { clip-path: polygon(
      0 20%, 100% 20%, 100% 21%, 0 21%,
      0 33%, 100% 33%, 100% 34%, 0 34%,
      0 49%, 100% 49%, 100% 50%, 0 50%,
      0 62%, 100% 62%, 100% 63%, 0 63%,
      0 82%, 100% 82%, 100% 83%, 0 83%
    ); }
    20% { clip-path: polygon(
      0 25%, 100% 25%, 100% 26%, 0 26%,
      0 38%, 100% 38%, 100% 39%, 0 39%,
      0 54%, 100% 54%, 100% 55%, 0 55%,
      0 67%, 100% 67%, 100% 68%, 0 68%,
      0 87%, 100% 87%, 100% 88%, 0 88%
    ); }
    40% { clip-path: polygon(
      0 15%, 100% 15%, 100% 16%, 0 16%,
      0 28%, 100% 28%, 100% 29%, 0 29%,
      0 44%, 100% 44%, 100% 45%, 0 45%,
      0 57%, 100% 57%, 100% 58%, 0 58%,
      0 77%, 100% 77%, 100% 78%, 0 78%
    ); }
    60% { clip-path: polygon(
      0 30%, 100% 30%, 100% 31%, 0 31%,
      0 43%, 100% 43%, 100% 44%, 0 44%,
      0 59%, 100% 59%, 100% 60%, 0 60%,
      0 72%, 100% 72%, 100% 73%, 0 73%,
      0 92%, 100% 92%, 100% 93%, 0 93%
    ); }
    80% { clip-path: polygon(
      0 10%, 100% 10%, 100% 11%, 0 11%,
      0 23%, 100% 23%, 100% 24%, 0 24%,
      0 39%, 100% 39%, 100% 40%, 0 40%,
      0 52%, 100% 52%, 100% 53%, 0 53%,
      0 72%, 100% 72%, 100% 73%, 0 73%
    ); }
  }
  
  @keyframes digital-glitch-anim-2 {
    0%, 100% { clip-path: polygon(
      0 15%, 100% 15%, 100% 16%, 0 16%,
      0 45%, 100% 45%, 100% 46%, 0 46%,
      0 67%, 100% 67%, 100% 68%, 0 68%,
      0 90%, 100% 90%, 100% 91%, 0 91%
    ); }
    25% { clip-path: polygon(
      0 5%, 100% 5%, 100% 6%, 0 6%,
      0 35%, 100% 35%, 100% 36%, 0 36%,
      0 57%, 100% 57%, 100% 58%, 0 58%,
      0 80%, 100% 80%, 100% 81%, 0 81%
    ); }
    50% { clip-path: polygon(
      0 25%, 100% 25%, 100% 26%, 0 26%,
      0 55%, 100% 55%, 100% 56%, 0 56%,
      0 77%, 100% 77%, 100% 78%, 0 78%,
      0 95%, 100% 95%, 100% 96%, 0 96%
    ); }
    75% { clip-path: polygon(
      0 10%, 100% 10%, 100% 11%, 0 11%,
      0 40%, 100% 40%, 100% 41%, 0 41%,
      0 62%, 100% 62%, 100% 63%, 0 63%,
      0 85%, 100% 85%, 100% 86%, 0 86%
    ); }
  }
`}</style>
    </span>
  )
}

export default GlitchText
