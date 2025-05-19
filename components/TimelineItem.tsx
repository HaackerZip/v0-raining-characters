interface TimelineItemProps {
  date: string
  title: string
  subtitle: string
  description: string
}

const TimelineItem = ({ date, title, subtitle, description }: TimelineItemProps) => {
  return (
    <div className="mb-8 flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-[1px] h-full bg-white/20" />
      </div>

      <div className="flex-1">
        <span className="text-sm text-white/50 font-mono">{date}</span>
        <h3 className="text-lg font-mono mt-1">{title}</h3>
        <h4 className="text-white/70 font-mono mb-2">{subtitle}</h4>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default TimelineItem
