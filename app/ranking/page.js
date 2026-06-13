'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import RankingTable from '@/components/RankingTable'
import { getRanking, clearRanking } from '@/utils/ranking'
import { Trophy, Trash2, ArrowRight } from 'lucide-react'

export default function RankingPage() {
  const [entries, setEntries] = useState([])

  // Carrega o ranking salvo no navegador
  useEffect(() => {
    setEntries(getRanking())
  }, [])

  // Mostra primeiro quem fez mais pontos
  const ordered = [...entries].sort((a, b) => b.score - a.score)

  const handleClear = () => {
    clearRanking()
    setEntries([])
  }

  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <SectionTitle label="Classificação" title="Ranking" />
        {ordered.length > 0 && (
          <button
            onClick={handleClear}
            className="nb-border nb-press rounded-md bg-[#F87171] px-4 py-2 font-extrabold flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" strokeWidth={3} /> Limpar ranking
          </button>
        )}
      </div>

      {ordered.length === 0 ? (
        <div className="nb-card rounded-2xl p-12 text-center">
          <span className="grid place-items-center w-20 h-20 mx-auto bg-[#FACC15] nb-border rounded-full mb-4">
            <Trophy className="w-10 h-10" strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-extrabold">Nenhuma pontuação ainda</h2>
          <p className="text-black/70 mt-2">
            Faça o quiz para aparecer aqui e começar a competir!
          </p>
          <Link
            href="/quiz"
            className="mt-6 inline-flex items-center gap-2 nb-border nb-shadow-sm nb-press rounded-md bg-[#2563EB] text-white px-6 py-3 font-extrabold"
          >
            Fazer o quiz <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </Link>
        </div>
      ) : (
        <RankingTable entries={ordered} />
      )}
    </div>
  )
}
