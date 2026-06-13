'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, RotateCcw, X } from 'lucide-react'
import { niveis } from '@/data/quiz'

// Mostra os flashcards de uma trilha. Primeiro o aluno escolhe o nível
// e depois passa pelos cards um a um.
export default function Flashcard({ trilha, onClose }) {
  const [nivel, setNivel] = useState(null)
  const [index, setIndex] = useState(0)
  const [virado, setVirado] = useState(false)

  // Tela de escolha do nível
  if (!nivel) {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-2xl font-extrabold">{trilha.title}</h3>
            <button onClick={onClose} className="nb-border rounded-md bg-white p-2" aria-label="Fechar">
              <X className="w-5 h-5" strokeWidth={3} />
            </button>
          </div>
          <div className="nb-card rounded-2xl p-6">
            <p className="font-extrabold mb-4">Escolha o nível para estudar:</p>
            <div className="flex flex-col gap-3">
              {niveis.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setNivel(n)}
                  className="nb-border nb-press rounded-md bg-[#FACC15] px-4 py-3 font-extrabold text-left flex items-center justify-between"
                >
                  {n.nome}
                  <span className="text-sm font-semibold text-black/60">
                    {trilha.flashcards[n.id].length} cards
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const cards = trilha.flashcards[nivel.id]
  const card = cards[index]

  const proximo = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1)
      setVirado(false)
    }
  }

  const anterior = () => {
    if (index > 0) {
      setIndex(index - 1)
      setVirado(false)
    }
  }

  // Volta para a escolha de nível
  const trocarNivel = () => {
    setNivel(null)
    setIndex(0)
    setVirado(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-2xl font-extrabold">
            {trilha.title} · {nivel.nome}
          </h3>
          <button onClick={onClose} className="nb-border rounded-md bg-white p-2" aria-label="Fechar">
            <X className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>

        {/* Clicar no card vira para mostrar a resposta */}
        <button
          onClick={() => setVirado(!virado)}
          className={`w-full min-h-[280px] nb-border nb-shadow rounded-2xl p-8 flex flex-col items-center justify-center text-center ${
            virado ? 'bg-[#3CCB7F]' : 'bg-white'
          }`}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-black/50 mb-3">
            {virado ? 'Resposta' : 'Pergunta'}
          </span>
          <p className="text-2xl font-extrabold leading-snug">{virado ? card.a : card.q}</p>
          <span className="mt-6 text-sm font-semibold text-black/50 flex items-center gap-1">
            <RotateCcw className="w-4 h-4" /> clique para virar
          </span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={anterior}
            disabled={index === 0}
            className="nb-border rounded-md bg-white px-5 py-3 font-extrabold flex items-center gap-2 disabled:opacity-40"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={3} /> Anterior
          </button>

          <span className="text-white font-extrabold">
            Card {index + 1} de {cards.length}
          </span>

          <button
            onClick={proximo}
            disabled={index === cards.length - 1}
            className="nb-border nb-shadow-sm rounded-md bg-[#FACC15] px-5 py-3 font-extrabold flex items-center gap-2 disabled:opacity-40"
          >
            Próximo <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>

        <div className="text-center mt-4">
          <button onClick={trocarNivel} className="text-white font-semibold underline">
            Trocar nível
          </button>
        </div>
      </div>
    </div>
  )
}
