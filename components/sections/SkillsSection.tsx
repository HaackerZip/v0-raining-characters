import SkillCategory from "@/components/SkillCategory"
import SectionHeader from "@/components/sections/SectionHeader"
import GlitchText from "@/components/GlitchText"

const skills = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Java", "Python", "Node.js", "Express", "Spring Boot"]
  },
  {
    title: "Bases de datos",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    title: "Otros",
    skills: ["TailwindCSS", "UI/UX", "Git", "Docker", "AWS", "Figma"]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <GlitchText text="HABILIDADES TÉCNICAS" />
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}