import { Network, Code, Atom } from 'lucide-react'

// Cores usadas para diferenciar as trilhas
const bgByColor = {
  green: 'bg-[#3CCB7F]',
  purple: 'bg-[#A78BFA]',
  yellow: 'bg-[#FACC15]',
  blue: 'bg-[#3B9EFF]',
}

// Escolhe o ícone de acordo com a trilha
export default function TrilhaIcon({ icon, color, size = 'md' }) {
  const box = size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
  const ic = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'

  let content
  if (icon === 'js') {
    content = <span className="font-extrabold text-2xl">JS</span>
  } else if (icon === 'html') {
    content = <Code className={ic} strokeWidth={2.5} />
  } else if (icon === 'react') {
    content = <Atom className={ic} strokeWidth={2.5} />
  } else {
    content = <Network className={ic} strokeWidth={2.5} />
  }

  return (
    <span className={`grid place-items-center ${box} ${bgByColor[color] || 'bg-[#FACC15]'} nb-border rounded-lg text-black`}>
      {content}
    </span>
  )
}
