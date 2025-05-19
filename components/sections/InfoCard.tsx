export default function InfoCard({ items }: {
  items: Array<{
    label: string,
    value: string,
    highlight?: boolean
  }>
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white/50 font-mono w-24">{item.label}</span>
            <span className={`font-mono ${item.highlight ? 'text-green-400' : ''}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}