import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import SectionHeader from "@/components/sections/SectionHeader"
import GlitchText from "@/components/GlitchText"
import SocialLink from "@/components/sections/SocialLink"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="CONTACTO" />
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-white/80 font-mono mb-6">
              ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a través del formulario o mis
              redes sociales.
            </p>

            <div className="space-y-4 mb-8">
              <SocialLink icon={<Mail className="h-5 w-5 mr-3 text-white/70" />} text="email@ejemplo.com" />
              <SocialLink
                icon={<Github className="h-5 w-5 mr-3 text-white/70" />}
                text="github.com/usuario"
                href="#"
              />
              <SocialLink
                icon={<Linkedin className="h-5 w-5 mr-3 text-white/70" />}
                text="linkedin.com/in/usuario"
                href="#"
              />
              <SocialLink
                icon={<Twitter className="h-5 w-5 mr-3 text-white/70" />}
                text="twitter.com/usuario"
                href="#"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}