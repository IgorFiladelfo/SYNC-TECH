import Link from 'next/link'
import { BookOpen, Video, HelpCircle, Trophy, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import StudyCard from '@/components/StudyCard'
import { trilhas } from '@/data/trilhas'

const features = [
  { icon: BookOpen, title: 'Trilhas', text: 'Estude com flashcards, no seu ritmo e do seu jeito.', color: 'bg-[#3CCB7F]', href: '/trilhas' },
  { icon: Video, title: 'Vídeos', text: 'Aulas explicativas selecionadas para iniciantes.', color: 'bg-[#A78BFA]', href: '/videos' },
  { icon: HelpCircle, title: 'Quiz', text: 'Teste seus conhecimentos e ganhe pontos.', color: 'bg-[#FACC15]', href: '/quiz' },
  { icon: Trophy, title: 'Ranking', text: 'Acompanhe sua pontuação e evolua no seu ritmo.', color: 'bg-[#3B9EFF]', href: '/ranking' },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Recursos principais */}
      <section className="container mx-auto py-16">
        <SectionTitle label="Como funciona" title="Tudo que você precisa para começar" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link key={f.title} href={f.href} className="nb-card nb-press rounded-xl p-6 flex flex-col gap-4">
              <span className={`grid place-items-center w-14 h-14 ${f.color} nb-border rounded-lg`}>
                <f.icon className="w-7 h-7" strokeWidth={2.5} />
              </span>
              <h3 className="text-xl font-extrabold">{f.title}</h3>
              <p className="text-sm text-black/70">{f.text}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-extrabold text-[#2563EB]">
                Acessar <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trilhas de estudo */}
      <section className="container mx-auto py-8">
        <SectionTitle label="Trilhas de estudo" title="Escolha sua trilha" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trilhas.map((t) => (
            <StudyCard key={t.id} trilha={t} />
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section className="container mx-auto py-16">
        <div className="nb-card nb-shadow rounded-2xl bg-[#FACC15] p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Comece pelo básico e avance no seu ritmo.
          </h2>
          <p className="mt-4 text-lg text-black/70 max-w-2xl mx-auto">
            A proposta do SYNC-TECH é tornar o primeiro contato com tecnologia
            mais acessível, leve e interativo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/trilhas" className="nb-border nb-shadow nb-press rounded-md bg-white px-7 py-4 text-lg font-extrabold flex items-center gap-2">
              COMEÇAR AGORA <ArrowRight className="w-5 h-5" strokeWidth={3} />
            </Link>
            <Link href="/quiz" className="nb-border nb-shadow nb-press rounded-md bg-[#2563EB] text-white px-7 py-4 text-lg font-extrabold">
              FAZER O QUIZ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
