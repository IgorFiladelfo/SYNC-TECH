import { Trophy, Medal } from 'lucide-react'

// Organiza o ranking em cards, começando pela maior pontuação
export default function RankingTable({ entries }) {
  const medalColor = ['bg-[#FACC15]', 'bg-[#D1D5DB]', 'bg-[#F59E0B]']

  return (
    <div className="flex flex-col gap-4">
      {entries.map((e, i) => (
        <div
          key={e.id}
          className={`nb-card rounded-xl p-4 sm:p-5 flex items-center gap-4 ${i === 0 ? 'bg-[#FFFBEB]' : ''}`}
        >
          <span
            className={`grid place-items-center w-12 h-12 nb-border rounded-full font-extrabold text-lg shrink-0 ${
              i < 3 ? medalColor[i] : 'bg-white'
            }`}
          >
            {i < 3 ? <Medal className="w-6 h-6" strokeWidth={2.5} /> : i + 1}
          </span>

          <div className="flex-1 min-w-0">
            <p className="text-lg font-extrabold truncate">{e.name}</p>
            <p className="text-xs text-black/60 font-medium">
              {e.difficulty} · {e.date}
            </p>
          </div>

          <p className="text-2xl font-extrabold flex items-center gap-1 shrink-0">
            <Trophy className="w-5 h-5 text-[#F59E0B]" strokeWidth={2.5} />
            {e.score}
            <span className="text-sm text-black/50 font-bold">pts</span>
          </p>
        </div>
      ))}
    </div>
  )
}
