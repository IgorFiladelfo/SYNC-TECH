'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import VideoCard from '@/components/VideoCard'
import { videos } from '@/data/videos'

const categorias = ['Todos', 'Lógica', 'HTML', 'CSS', 'JavaScript', 'React']

export default function VideosPage() {
  const [filtro, setFiltro] = useState('Todos')

  const lista = filtro === 'Todos' ? videos : videos.filter((v) => v.category === filtro)

  return (
    <div className="container mx-auto py-12">
      <SectionTitle
        label="Área de apoio"
        title="Vídeos para estudar"
        labelColor="text-[#A78BFA]"
      />

      {/* Filtros por categoria */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setFiltro(c)}
            className={`nb-border nb-press rounded-full px-4 py-2 font-extrabold text-sm ${
              filtro === c ? 'bg-[#2563EB] text-white' : 'bg-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lista.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  )
}
