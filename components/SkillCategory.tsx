interface SkillCategoryProps {
  title: string
  skills: string[]
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-mono mb-3 border-b border-white/10 pb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded font-mono text-sm transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
