import { ReactNode } from "react"

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-mono mb-12 border-b border-white/10 pb-4">
      {children}
    </h2>
  )
}