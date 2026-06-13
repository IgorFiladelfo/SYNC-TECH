// Card que mostra a pergunta e as opções do quiz
export default function QuizCard({ badge, pergunta, opcoes, selected, onSelect, index, total }) {
  return (
    <div className="nb-card rounded-xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-extrabold bg-[#FACC15] nb-border rounded-full px-3 py-1">{badge}</span>
        <span className="text-sm font-extrabold text-black/60">
          Pergunta {index + 1} de {total}
        </span>
      </div>

      <h3 className="text-2xl font-extrabold leading-tight mb-6">{pergunta}</h3>

      <div className="flex flex-col gap-3">
        {opcoes.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`text-left nb-border rounded-md px-4 py-3 font-semibold nb-press ${
              selected === i ? 'bg-[#2563EB] text-white' : 'bg-white'
            }`}
          >
            <span className="font-extrabold mr-2">{String.fromCharCode(65 + i)}.</span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
