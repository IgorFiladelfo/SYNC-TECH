import { Zap } from 'lucide-react'

// Etiqueta pequena usada para mostrar XP ou progresso na home
export default function ProgressBadge({ children, color = 'bg-[#3CCB7F]' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 nb-border nb-shadow-sm rounded-md px-3 py-1.5 font-extrabold ${color}`}>
      <Zap className="w-4 h-4" strokeWidth={3} fill="black" />
      {children}
    </span>
  )
}
