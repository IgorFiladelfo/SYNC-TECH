import SectionTitle from '@/components/SectionTitle'
import { HelpCircle, Users, LayoutGrid, GraduationCap, User } from 'lucide-react'

const aprendizados = ['HTML', 'CSS', 'JavaScript', 'React']
const recursos = ['Trilhas', 'Flashcards', 'Vídeos', 'Quiz', 'Ranking']

export default function SobrePage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <SectionTitle label="Sobre o projeto" title="Sobre o SYNC-TECH" />

      {/* Texto principal, contando como o projeto surgiu */}
      <div className="nb-card rounded-2xl p-8 mb-8">
        <p className="text-lg text-black/80 leading-relaxed">
          A ideia do SYNC-TECH surgiu da minha própria experiência tentando aprender a programar.
          No começo eu me perdia no meio de tanta informação espalhada e demorei um pouco para
          pegar o ritmo. Foi aí que me veio a pergunta: e se existisse um lugar simples,
          que juntasse o básico introdutorio de um jeito mais leve?
        </p>
        <p className="text-lg text-black/80 leading-relaxed mt-4">
          O problema que eu quis resolver é justamente esse. Muita gente trava logo nos primeiros
          dias porque acha tudo difícil ou confuso demais. A proposta do SYNC-TECH é mostrar que
          dá pra começar com calma, estudando um pouco de cada vez e testando o que aprendeu.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="nb-card rounded-xl p-6">
          <span className="grid place-items-center w-12 h-12 bg-[#3CCB7F] nb-border rounded-lg mb-3">
            <HelpCircle className="w-6 h-6" strokeWidth={2.5} />
          </span>
          <h3 className="text-xl font-extrabold">Por que o projeto foi criado?</h3>
          <p className="text-black/70 mt-2">
            Porque aprender a programar do zero pode assustar. Eu quis montar um espaço que deixasse
            esse primeiro contato mais tranquilo, sem aquela sensação de estar perdido.
          </p>
        </div>

        <div className="nb-card rounded-xl p-6">
          <span className="grid place-items-center w-12 h-12 bg-[#3B9EFF] nb-border rounded-lg mb-3">
            <Users className="w-6 h-6" strokeWidth={2.5} />
          </span>
          <h3 className="text-xl font-extrabold">Quem pode utilizar?</h3>
          <p className="text-black/70 mt-2">
            Pensei principalmente em quem está começando agora e em pessoas curiosas que querem
            entender melhor como a tecnologia funciona, mesmo sem nenhuma experiência.
          </p>
        </div>

        <div className="nb-card rounded-xl p-6">
          <span className="grid place-items-center w-12 h-12 bg-[#FACC15] nb-border rounded-lg mb-3">
            <LayoutGrid className="w-6 h-6" strokeWidth={2.5} />
          </span>
          <h3 className="text-xl font-extrabold">O que existe na plataforma?</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {recursos.map((r) => (
              <span key={r} className="nb-border bg-white rounded-full px-3 py-1 text-sm font-extrabold">
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="nb-card rounded-xl p-6">
          <span className="grid place-items-center w-12 h-12 bg-[#A78BFA] nb-border rounded-lg mb-3">
            <GraduationCap className="w-6 h-6" strokeWidth={2.5} />
          </span>
          <h3 className="text-xl font-extrabold">O que foi usado na construção desse site?</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {aprendizados.map((a) => (
              <span key={a} className="nb-border bg-white rounded-full px-3 py-1 text-sm font-extrabold">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quem desenvolveu o projeto */}
      <div className="nb-card rounded-2xl p-8 bg-[#FACC15] flex items-center gap-4">
        <span className="grid place-items-center w-14 h-14 bg-white nb-border rounded-lg shrink-0">
          <User className="w-7 h-7" strokeWidth={2.5} />
        </span>
        <div>
          <h3 className="text-lg font-extrabold">Desenvolvido por</h3>
          <p className="text-black/80">
            Igor Silva Filadelfo
          </p>
        </div>
      </div>
    </div>
  )
}
