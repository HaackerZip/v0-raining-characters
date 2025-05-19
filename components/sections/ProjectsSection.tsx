import ProjectCard from "@/components/ProjectCard"
import SectionHeader from "@/components/sections/SectionHeader"
import GlitchText from "@/components/GlitchText"

const projects = [
  {
    title: "Proyecto 01",
    description: "Aplicación web desarrollada con React y Node.js para gestión de tareas y proyectos.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Proyecto 02",
    description: "E-commerce con sistema de pagos integrado y panel de administración.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Proyecto 03",
    description: "Dashboard para visualización de datos en tiempo real con gráficos interactivos.",
    tags: ["TypeScript", "D3.js", "Firebase"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Proyecto 04",
    description: "Aplicación móvil para seguimiento de hábitos y productividad personal.",
    tags: ["React Native", "Redux", "SQLite"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Proyecto 05",
    description: "Sistema de gestión de contenidos con editor WYSIWYG y control de versiones.",
    tags: ["Vue.js", "Express", "MySQL"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  },
  {
    title: "Proyecto 06",
    description: "API RESTful para integración con sistemas de terceros y microservicios.",
    tags: ["Java", "Spring Boot", "Docker"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="PROYECTOS PRINCIPALES" />
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}