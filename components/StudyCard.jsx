import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TrilhaIcon from './TrilhaIcon'

// Card usado para apresentar uma trilha na página inicial
export default function StudyCard({ trilha }) {
  return (
    <div className="nb-card rounded-xl p-6 flex flex-col gap-4 h-full">
      <TrilhaIcon icon={trilha.icon} color={trilha.color} size="lg" />

      <div>
        <span className="inline-block text-xs font-extrabold bg-[#FBF7EC] nb-border rounded-full px-3 py-0.5 mb-2">
          {trilha.level}
        </span>
        <h3 className="text-2xl font-extrabold leading-tight">{trilha.title}</h3>
        <p className="text-base text-black/70 mt-2">{trilha.description}</p>
      </div>

      <div className="mt-auto pt-2">
        <Link
          href="/trilhas"
          className="inline-flex items-center gap-2 font-extrabold border-b-[3px] border-black pb-0.5 hover:gap-3 transition-all"
        >
          Ver trilha <ArrowRight className="w-4 h-4" strokeWidth={3} />
        </Link>
      </div>
    </div>
  )
}
