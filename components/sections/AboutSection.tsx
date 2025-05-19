import GlitchText from "@/components/GlitchText"
import SectionHeader from "@/components/sections/SectionHeader"
import InfoCard from "./InfoCard"


export default function AboutSection() {
  const personalInfo = [
    { label: "Nombre:", value: "Nombre Apellido" },
    { label: "Edad:", value: "30 años" },
    { label: "Ubicación:", value: "Ciudad, País" },
    { label: "Email:", value: "email@ejemplo.com" },
    { label: "Disponible:", value: "Para proyectos", highlight: true }
  ]

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="SOBRE MÍ" />
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/80 font-mono leading-relaxed mb-4">
              Soy un desarrollador full stack con más de 5 años de experiencia en el desarrollo de aplicaciones web y
              móviles. Me especializo en crear soluciones digitales que combinan funcionalidad y estética.
            </p>
            <p className="text-white/80 font-mono leading-relaxed mb-4">
              Mi enfoque se centra en la creación de interfaces limpias y minimalistas que ofrezcan una experiencia de
              usuario excepcional, sin sacrificar el rendimiento o la accesibilidad.
            </p>
            <p className="text-white/80 font-mono leading-relaxed">
              Constantemente me mantengo actualizado con las últimas tecnologías y tendencias en el desarrollo web, lo
              que me permite ofrecer soluciones innovadoras y eficientes para cada proyecto.
            </p>
          </div>

          <InfoCard items={personalInfo} />
        </div>
      </div>
    </section>
  )
}