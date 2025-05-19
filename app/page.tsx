import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import ProjectCard from "@/components/ProjectCard"
import TimelineItem from "@/components/TimelineItem"
import ContactForm from "@/components/ContactForm"
import SkillCategory from "@/components/SkillCategory"
import GlitchText from "@/components/GlitchText"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

          <a
            href="/cv.pdf"
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded font-mono text-white transition-all"
            download
          >
            Descargar CV <Download className="ml-2 h-4 w-4" />
          </a>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-white transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="SOBRE MÍ" />
          </h2>

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

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-white/50 font-mono w-24">Nombre:</span>
                  <span className="font-mono">Nombre Apellido</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/50 font-mono w-24">Edad:</span>
                  <span className="font-mono">30 años</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/50 font-mono w-24">Ubicación:</span>
                  <span className="font-mono">Ciudad, País</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/50 font-mono w-24">Email:</span>
                  <span className="font-mono">email@ejemplo.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/50 font-mono w-24">Disponible:</span>
                  <span className="font-mono text-green-400">Para proyectos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="PROYECTOS PRINCIPALES" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Proyecto 01"
              description="Aplicación web desarrollada con React y Node.js para gestión de tareas y proyectos."
              tags={["React", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Proyecto 02"
              description="E-commerce con sistema de pagos integrado y panel de administración."
              tags={["Next.js", "Stripe", "PostgreSQL"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Proyecto 03"
              description="Dashboard para visualización de datos en tiempo real con gráficos interactivos."
              tags={["TypeScript", "D3.js", "Firebase"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Proyecto 04"
              description="Aplicación móvil para seguimiento de hábitos y productividad personal."
              tags={["React Native", "Redux", "SQLite"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Proyecto 05"
              description="Sistema de gestión de contenidos con editor WYSIWYG y control de versiones."
              tags={["Vue.js", "Express", "MySQL"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Proyecto 06"
              description="API RESTful para integración con sistemas de terceros y microservicios."
              tags={["Java", "Spring Boot", "Docker"]}
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="HABILIDADES TÉCNICAS" />
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <SkillCategory title="Frontend" skills={["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript"]} />

            <SkillCategory title="Backend" skills={["Java", "Python", "Node.js", "Express", "Spring Boot"]} />

            <SkillCategory title="Bases de datos" skills={["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"]} />

            <SkillCategory title="Otros" skills={["TailwindCSS", "UI/UX", "Git", "Docker", "AWS", "Figma"]} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="EXPERIENCIA LABORAL" />
          </h2>

          <div className="ml-4">
            <TimelineItem
              date="2021 - Presente"
              title="Desarrollador Full Stack Senior"
              subtitle="Empresa Tecnológica S.A."
              description="Desarrollo de aplicaciones web y móviles utilizando React, Next.js y Node.js. Implementación de arquitecturas escalables y mantenimiento de sistemas existentes."
            />

            <TimelineItem
              date="2019 - 2021"
              title="Desarrollador Frontend"
              subtitle="Agencia Digital"
              description="Creación de interfaces de usuario responsivas y optimizadas para diferentes dispositivos. Colaboración con diseñadores UX/UI para implementar experiencias de usuario intuitivas."
            />

            <TimelineItem
              date="2017 - 2019"
              title="Desarrollador Backend"
              subtitle="Startup Innovadora"
              description="Desarrollo de APIs RESTful y microservicios utilizando Java y Spring Boot. Implementación de bases de datos relacionales y NoSQL según los requerimientos del proyecto."
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="FORMACIÓN ACADÉMICA" />
          </h2>

          <div className="ml-4">
            <TimelineItem
              date="2015 - 2017"
              title="Máster en Ingeniería de Software"
              subtitle="Universidad Tecnológica"
              description="Especialización en desarrollo de aplicaciones web y móviles, arquitectura de software y metodologías ágiles."
            />

            <TimelineItem
              date="2011 - 2015"
              title="Grado en Ingeniería Informática"
              subtitle="Universidad Nacional"
              description="Formación en fundamentos de programación, estructuras de datos, algoritmos, bases de datos y redes."
            />

            <TimelineItem
              date="2020"
              title="Certificación en Desarrollo Web Avanzado"
              subtitle="Plataforma de Educación Online"
              description="Formación especializada en tecnologías web modernas, incluyendo React, Node.js y bases de datos NoSQL."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
            <GlitchText text="CONTACTO" />
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-white/80 font-mono mb-6">
                ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a través del formulario o mis
                redes sociales.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-white/70" />
                  <span className="font-mono">email@ejemplo.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-white/70" />
                  <a href="#" className="font-mono hover:text-white/90 transition-colors">
                    github.com/usuario
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-white/70" />
                  <a href="#" className="font-mono hover:text-white/90 transition-colors">
                    linkedin.com/in/usuario
                  </a>
                </div>
                <div className="flex items-center">
                  <Twitter className="h-5 w-5 mr-3 text-white/70" />
                  <a href="#" className="font-mono hover:text-white/90 transition-colors">
                    twitter.com/usuario
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 font-mono text-sm">
            © {new Date().getFullYear()} Nombre Apellido. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
