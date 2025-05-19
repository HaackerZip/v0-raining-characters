import { Download } from "lucide-react"

export default function DownloadButton() {
  return (
    <a
      href="/cv.pdf"
      className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded font-mono text-white transition-all"
      download
    >
      Descargar CV <Download className="ml-2 h-4 w-4" />
    </a>
  )
}