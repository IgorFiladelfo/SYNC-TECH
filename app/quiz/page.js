'use client'

import { useState } from 'react'
import Link from 'next/link'
import TrilhaIcon from '@/components/TrilhaIcon'
import QuizCard from '@/components/QuizCard'
import { trilhas } from '@/data/trilhas'
import { niveis, perguntas } from '@/data/quiz'
import { saveScore } from '@/utils/ranking'
import { ArrowLeft, ArrowRight, RotateCcw, Trophy, PartyPopper } from 'lucide-react'

export default function QuizPage() {
  // Fluxo do quiz: escolher trilha, escolher nível, responder e ver o resultado
  const [etapa, setEtapa] = useState('trilha')
  const [trilha, setTrilha] = useState(null)
  const [nivel, setNivel] = useState(null)
  const [atual, setAtual] = useState(0)
  const [respostas, setRespostas] = useState({})
  const [nome, setNome] = useState('')
  const [salvo, setSalvo] = useState(false)

  // Lista de perguntas conforme a trilha e o nível escolhidos
  const lista = trilha && nivel ? perguntas[trilha.id][nivel.id] : []

  // Calcula a pontuação de acordo com os acertos do usuário
  const acertos = lista.reduce((acc, q, i) => (respostas[i] === q.correta ? acc + 1 : acc), 0)
  const pontuacao = nivel ? acertos * nivel.pontos : 0

  const responder = (i) => setRespostas({ ...respostas, [atual]: i })

  const proxima = () => {
    if (atual < lista.length - 1) setAtual(atual + 1)
    else setEtapa('resultado')
  }

  const reiniciar = () => {
    setEtapa('trilha')
    setTrilha(null)
    setNivel(null)
    setAtual(0)
    setRespostas({})
    setNome('')
    setSalvo(false)
  }

  const salvar = () => {
    saveScore(nome, pontuacao, nivel.nome)
    setSalvo(true)
  }

  // Tela para escolher a trilha do quiz
  if (etapa === 'trilha') {
    return (
      <div className="container mx-auto py-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Quiz</h1>
        <p className="text-black/70 mb-8">Escolha uma trilha para começar.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {trilhas.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTrilha(t)
                setEtapa('nivel')
              }}
              className="nb-card nb-press rounded-xl p-6 flex items-center gap-4 text-left"
            >
              <TrilhaIcon icon={t.icon} color={t.color} />
              <span className="text-xl font-extrabold">{t.title}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Tela para escolher o nível das perguntas
  if (etapa === 'nivel') {
    return (
      <div className="container mx-auto py-12 max-w-3xl">
        <button onClick={reiniciar} className="font-extrabold flex items-center gap-2 mb-6">
          <ArrowLeft className="w-5 h-5" strokeWidth={3} /> Trocar trilha
        </button>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">{trilha.title}</h1>
        <p className="text-black/70 mb-8">Escolha o nível.</p>
        <div className="grid gap-5">
          {niveis.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setNivel(n)
                setEtapa('perguntas')
              }}
              className="nb-card nb-press rounded-xl p-6 flex items-center justify-between gap-4 text-left"
            >
              <div>
                <h3 className="text-2xl font-extrabold">{n.nome}</h3>
                <p className="text-black/70">{n.descricao}</p>
              </div>
              <span className="bg-[#FACC15] nb-border rounded-md px-3 py-1.5 font-extrabold shrink-0">
                {n.pontos} pts
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Tela de resultado do quiz
  if (etapa === 'resultado') {
    const foiBem = acertos >= Math.ceil(lista.length / 2)
    return (
      <div className="container mx-auto py-16 max-w-2xl">
        <div className="nb-card nb-shadow rounded-2xl p-8 sm:p-12 text-center">
          <span className="grid place-items-center w-20 h-20 mx-auto bg-[#FACC15] nb-border rounded-full mb-4">
            <PartyPopper className="w-10 h-10" strokeWidth={2.5} />
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Quiz finalizado!</h1>
          <p className="mt-2 text-lg text-black/70">
            {foiBem ? 'Mandou bem! Continue estudando os flashcards.' : 'Boa tentativa! Revise os flashcards e tente de novo.'}
          </p>
          <p className="mt-1 text-sm font-semibold text-black/50">
            {trilha.title} · {nivel.nome} · {acertos} de {lista.length} acertos
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-[#3CCB7F] nb-border nb-shadow-sm rounded-xl px-8 py-4">
            <Trophy className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-4xl font-extrabold">{pontuacao}</span>
            <span className="text-xl font-bold text-black/60">pts</span>
          </div>

          {!salvo ? (
            <div className="mt-8 text-left">
              <label className="font-extrabold">Seu nome para o ranking</label>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  className="flex-1 nb-border rounded-md px-4 py-3 font-semibold bg-white outline-none focus:bg-[#FFFBEB]"
                />
                <button
                  onClick={salvar}
                  className="nb-border nb-shadow-sm nb-press rounded-md bg-[#2563EB] text-white px-6 py-3 font-extrabold"
                >
                  Salvar no ranking
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8 nb-border rounded-md bg-[#3CCB7F] px-4 py-3 font-extrabold">
              Pontuação salva no ranking!
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button
              onClick={reiniciar}
              className="nb-border nb-shadow-sm nb-press rounded-md bg-[#FACC15] px-6 py-3 font-extrabold flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" strokeWidth={3} /> Refazer
            </button>
            <Link
              href="/ranking"
              className="nb-border nb-shadow-sm nb-press rounded-md bg-white px-6 py-3 font-extrabold flex items-center gap-2"
            >
              Ver ranking <ArrowRight className="w-5 h-5" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Tela onde o usuário responde as perguntas
  return (
    <div className="container mx-auto py-12 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">{trilha.title}</h1>
      <p className="text-black/70 mb-6">Nível {nivel.nome}</p>

      <div className="w-full h-3 bg-white nb-border rounded-full overflow-hidden mb-6">
        <div className="h-full bg-[#2563EB] transition-all" style={{ width: `${((atual + 1) / lista.length) * 100}%` }} />
      </div>

      <QuizCard
        badge={nivel.nome}
        pergunta={lista[atual].pergunta}
        opcoes={lista[atual].opcoes}
        selected={respostas[atual] ?? null}
        onSelect={responder}
        index={atual}
        total={lista.length}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setAtual(Math.max(0, atual - 1))}
          disabled={atual === 0}
          className="nb-border rounded-md bg-white px-5 py-3 font-extrabold flex items-center gap-2 disabled:opacity-40"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={3} /> Voltar
        </button>
        <button
          onClick={proxima}
          disabled={respostas[atual] === undefined}
          className="nb-border nb-shadow-sm nb-press rounded-md bg-[#FACC15] px-6 py-3 font-extrabold flex items-center gap-2 disabled:opacity-40"
        >
          {atual === lista.length - 1 ? 'Finalizar' : 'Próxima'}
          <ArrowRight className="w-5 h-5" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
