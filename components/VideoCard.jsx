import { Play } from 'lucide-react'

// Cores usadas nas etiquetas dos vídeos
const tagColor = {
  'Lógica': 'bg-[#3CCB7F]',
  HTML: 'bg-[#A78BFA]',
  CSS: 'bg-[#F472B6]',
  JavaScript: 'bg-[#FACC15]',
  React: 'bg-[#3B9EFF]',
}

export default function VideoCard({ video }) {
  return (
    <div className="nb-card rounded-xl p-6 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-3">
        <span className={`text-xs font-extrabold nb-border rounded-full px-3 py-1 ${tagColor[video.category] || 'bg-[#FACC15]'}`}>
          {video.category}
        </span>
        <span className="grid place-items-center w-10 h-10 bg-[#FACC15] nb-border rounded-md">
          <Play className="w-5 h-5" strokeWidth={2.5} fill="black" />
        </span>
      </div>

      <div>
        <h3 className="text-xl font-extrabold leading-tight">{video.title}</h3>
        <p className="text-sm text-black/70 mt-2">{video.description}</p>
      </div>

      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto nb-border nb-shadow-sm nb-press rounded-md bg-[#2563EB] text-white px-4 py-2.5 font-extrabold flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" strokeWidth={3} fill="white" /> Assistir
      </a>
    </div>
  )
}
