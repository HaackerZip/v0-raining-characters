import { ReactNode } from "react"

export default function SocialLink({
  icon,
  text,
  href
}: {
  icon: ReactNode,
  text: string,
  href?: string
}) {
  return (
    <div className="flex items-center">
      {icon}
      {href ? (
        <a href={href} className="font-mono hover:text-white/90 transition-colors">
          {text}
        </a>
      ) : (
        <span className="font-mono">{text}</span>
      )}
    </div>
  )
}