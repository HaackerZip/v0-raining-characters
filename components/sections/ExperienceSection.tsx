import TimelineItem from "@/components/TimelineItem"
import SectionHeader from "@/components/sections/SectionHeader"
import GlitchText from "@/components/GlitchText"

const experiences = [
  {
    date: "2021 - Presente",
    title: "Desarrollador Full Stack Senior",
    subtitle: "Empresa Tecnológica S.A.",
    description: "Desarrollo de aplicaciones web y móviles utilizando React, Next.js y Node.js. Implementación de arquitecturas escalables y mantenimiento de sistemas existentes."
  },
  {
    date: "2019 - 2021",
    title: "Desarrollador Frontend",
    subtitle: "Agencia Digital",
    description: "Creación de interfaces de usuario responsivas y optimizadas para diferentes dispositivos. Colaboración con diseñadores UX/UI para implementar experiencias de usuario intuitivas."
  },
  {
    date: "2017 - 2019",
    title: "Desarrollador Backend",
    subtitle: "Startup Innovadora",
    description: "Desarrollo de APIs RESTful y microservicios utilizando Java y Spring Boot. Implementación de bases de datos relacionales y NoSQL según los requerimientos del proyecto."
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="EXPERIENCIA LABORAL" />
        </SectionHeader>

        <div className="ml-4">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}