import TimelineItem from "@/components/TimelineItem"
import SectionHeader from "@/components/sections/SectionHeader"
import GlitchText from "@/components/GlitchText"

const education = [
  {
    date: "2015 - 2017",
    title: "Máster en Ingeniería de Software",
    subtitle: "Universidad Tecnológica",
    description: "Especialización en desarrollo de aplicaciones web y móviles, arquitectura de software y metodologías ágiles."
  },
  {
    date: "2011 - 2015",
    title: "Grado en Ingeniería Informática",
    subtitle: "Universidad Nacional",
    description: "Formación en fundamentos de programación, estructuras de datos, algoritmos, bases de datos y redes."
  },
  {
    date: "2020",
    title: "Certificación en Desarrollo Web Avanzado",
    subtitle: "Plataforma de Educación Online",
    description: "Formación especializada en tecnologías web modernas, incluyendo React, Node.js y bases de datos NoSQL."
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="FORMACIÓN ACADÉMICA" />
        </SectionHeader>

        <div className="ml-4">
          {education.map((edu, index) => (
            <TimelineItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}