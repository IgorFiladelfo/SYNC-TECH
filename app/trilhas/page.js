'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import TrilhaIcon from '@/components/TrilhaIcon'
import Flashcard from '@/components/Flashcard'
import { trilhas } from '@/data/trilhas'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Trophy, BookOpen, Check } from 'lucide-react'

export default function TrilhasPage() {
  // Guarda as trilhas que já foram marcadas como estudadas
  const [done, setDone] = useLocalStorage('sync-tech-progress', [])
  // Controla qual trilha está aberta nos flashcards
  const [estudando, setEstudando] = useState(null)

  const marcar = (id) => {
    if (done.includes(id)) setDone(done.filter((x) => x !== id))
    else setDone([...done, id])
  }

  const percent = Math.round((done.length / trilhas.length) * 100)

  return (
    <div className="container mx-auto py-12">
      <SectionTitle label="Trilhas de estudo" title="Estude no seu ritmo" />

      {/* Progresso geral das trilhas */}
      <div className="nb-card rounded-xl p-6 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="grid place-items-center w-14 h-14 bg-[#FACC15] nb-border rounded-lg shrink-0">
          <Trophy className="w-7 h-7" strokeWidth={2.5} />
        </span>
        <div className="flex-1 w-full">
          <div className="flex justify-between font-extrabold mb-2">
            <span>Seu progresso</span>
            <span>{done.length}/{trilhas.length} trilhas</span>
          </div>
          <div className="w-full h-5 bg-white nb-border rounded-full overflow-hidden">
            <div className="h-full bg-[#3CCB7F] transition-all" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {trilhas.map((t) => {
          const concluida = done.includes(t.id)
          return (
            <div key={t.id} className="nb-card rounded-xl p-6 flex flex-col gap-4">
              <TrilhaIcon icon={t.icon} color={t.color} size="lg" />

              <div>
                <span className="inline-block text-xs font-extrabold bg-[#FBF7EC] nb-border rounded-full px-3 py-0.5 mb-2">
                  {t.level}
                </span>
                <h3 className="text-2xl font-extrabold leading-tight">{t.title}</h3>
                <p className="text-base text-black/70 mt-2">{t.description}</p>
              </div>

              <p className="text-sm font-semibold text-black/60">Níveis: Básico · Médio · Avançado</p>

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setEstudando(t)}
                  className="flex-1 nb-border nb-shadow-sm nb-press rounded-md bg-[#2563EB] text-white px-4 py-3 font-extrabold flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" strokeWidth={2.5} /> Estudar conteúdo
                </button>
                <button
                  onClick={() => marcar(t.id)}
                  className={`flex-1 nb-border nb-shadow-sm nb-press rounded-md px-4 py-3 font-extrabold flex items-center justify-center gap-2 ${
                    concluida ? 'bg-[#3CCB7F]' : 'bg-[#FACC15]'
                  }`}
                >
                  {concluida ? (
                    <>
                      <Check className="w-5 h-5" strokeWidth={3} /> Estudada
                    </>
                  ) : (
                    'Marcar como estudada'
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {estudando && <Flashcard trilha={estudando} onClose={() => setEstudando(null)} />}
    </div>
  )
}
