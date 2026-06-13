import Link from 'next/link'
import { ArrowRight, BarChart3, GraduationCap } from 'lucide-react'
import ProgressBadge from './ProgressBadge'

export default function Hero() {
  return (
    <section className="container mx-auto pt-12 pb-16 grid lg:grid-cols-2 gap-12 items-center">
      {/* Lado esquerdo: texto */}
      <div>
        <span className="inline-block bg-[#3CCB7F] nb-border nb-shadow-sm rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide">
          + de 30 conteúdos iniciais
        </span>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight">
          Aprenda{' '}
          <span className="inline-block bg-[#FACC15] nb-border px-2 -rotate-1">
            programação
          </span>{' '}
          do zero, de um jeito simples e interativo.
        </h1>

        <p className="mt-6 text-lg text-black/70 max-w-xl">
          Trilhas de estudo passo a passo, vídeos explicativos, quizzes
          interativos e ranking para você evoluir e se destacar na tecnologia.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/trilhas"
            className="nb-border nb-shadow nb-press rounded-md bg-[#FACC15] px-7 py-4 text-lg font-extrabold flex items-center gap-2"
          >
            COMEÇAR AGORA <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </Link>
          <Link
            href="/ranking"
            className="nb-border nb-shadow nb-press rounded-md bg-[#2563EB] text-white px-7 py-4 text-lg font-extrabold flex items-center gap-2"
          >
            VER RANKING <BarChart3 className="w-5 h-5" strokeWidth={3} />
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-2 text-black/70">
          <GraduationCap className="w-5 h-5" strokeWidth={2.5} />
          <p className="text-sm font-semibold">Projeto criado para apoiar iniciantes em programação.</p>
        </div>
      </div>

      {/* Lado direito: ilustração simples de um editor de código (sem imagem externa) */}
      <div className="relative">
        <div className="nb-border nb-shadow rounded-xl overflow-hidden bg-[#1e1e2e]">
          {/* Barra de cima da janela */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#11111b] border-b-[3px] border-black">
            <span className="w-3 h-3 rounded-full bg-[#F87171]" />
            <span className="w-3 h-3 rounded-full bg-[#FACC15]" />
            <span className="w-3 h-3 rounded-full bg-[#3CCB7F]" />
            <span className="ml-2 text-white/50 font-mono text-xs">main.js</span>
          </div>

          {/* Linhas de código só para ilustrar */}
          <div className="p-6 font-mono text-sm leading-7 min-h-[360px]">
            <p>
              <span className="text-[#C586C0]">function</span>{' '}
              <span className="text-[#DCDCAA]">aprender</span>
              <span className="text-white/70">(</span>
              <span className="text-[#9CDCFE]">topico</span>
              <span className="text-white/70">) {'{'}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#569CD6]">let</span>{' '}
              <span className="text-[#9CDCFE]">progresso</span>{' '}
              <span className="text-white/70">=</span>{' '}
              <span className="text-[#B5CEA8]">0</span>
            </p>
            <p className="pl-4">
              <span className="text-[#C586C0]">while</span>{' '}
              <span className="text-white/70">(</span>
              <span className="text-[#9CDCFE]">progresso</span>{' '}
              <span className="text-white/70">{'<'}</span>{' '}
              <span className="text-[#B5CEA8]">100</span>
              <span className="text-white/70">) {'{'}</span>
            </p>
            <p className="pl-8">
              <span className="text-[#DCDCAA]">estudar</span>
              <span className="text-white/70">(</span>
              <span className="text-[#9CDCFE]">topico</span>
              <span className="text-white/70">)</span>
            </p>
            <p className="pl-8">
              <span className="text-[#9CDCFE]">progresso</span>{' '}
              <span className="text-white/70">+=</span>{' '}
              <span className="text-[#B5CEA8]">10</span>
            </p>
            <p className="pl-4">
              <span className="text-white/70">{'}'}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#C586C0]">return</span>{' '}
              <span className="text-[#CE9178]">&quot;Você conseguiu!&quot;</span>
            </p>
            <p>
              <span className="text-white/70">{'}'}</span>
            </p>
            <p className="mt-2">
              <span className="text-[#DCDCAA]">aprender</span>
              <span className="text-white/70">(</span>
              <span className="text-[#CE9178]">&quot;programação&quot;</span>
              <span className="text-white/70">)</span>
            </p>
          </div>
        </div>

        {/* Badge de XP */}
        <div className="absolute top-4 right-4">
          <ProgressBadge>+50 XP</ProgressBadge>
        </div>

        {/* Trecho de código */}
        <span className="absolute -bottom-4 left-4 bg-[#2563EB] text-white nb-border nb-shadow-sm rounded-md px-4 py-2 font-mono text-sm">
          console.log(&quot;Olá, mundo!&quot;)
        </span>
      </div>
    </section>
  )
}
