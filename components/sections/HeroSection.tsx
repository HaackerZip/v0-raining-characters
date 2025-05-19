import { ArrowDown, Download } from "lucide-react"
import GlitchText from "@/components/GlitchText"
import DownloadButton from "@/components/sections/DownloadButton"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-mono mb-4">
          <GlitchText text="NOMBRE APELLIDO" />
        </h1>
        <h2 className="text-xl md:text-2xl font-mono text-white/70 mb-8">Desarrollador Full Stack</h2>

        <p className="max-w-2xl mx-auto text-white/60 mb-10 font-mono">
          Especializado en crear experiencias digitales únicas y funcionales con un enfoque en diseño minimalista y
          rendimiento optimizado.
        </p>

        <DownloadButton />

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}