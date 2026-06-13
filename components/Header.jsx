'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Code2, Menu, X, ArrowRight, BarChart3 } from 'lucide-react'

const links = [
  { href: '/trilhas', label: 'Trilhas' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7EC] border-b-[3px] border-black">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-10 h-10 bg-[#FACC15] nb-border rounded-md">
            <Code2 className="w-6 h-6" strokeWidth={2.5} />
          </span>
          <span className="text-2xl font-extrabold tracking-tight">SYNC-TECH</span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-lg font-semibold hover:text-[#2563EB] transition-colors ${
                pathname === l.href ? 'text-[#2563EB] underline decoration-4 underline-offset-4' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Botões de ação desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/trilhas"
            className="nb-border nb-shadow-sm nb-press rounded-md bg-[#FACC15] px-5 py-2.5 font-extrabold flex items-center gap-2"
          >
            COMEÇAR <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </Link>
          <Link
            href="/ranking"
            className="nb-border nb-shadow-sm nb-press rounded-md bg-[#2563EB] text-white px-5 py-2.5 font-extrabold flex items-center gap-2"
          >
            VER RANKING <BarChart3 className="w-4 h-4" strokeWidth={3} />
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button
          className="lg:hidden nb-border rounded-md p-2 bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden border-t-[3px] border-black bg-[#FBF7EC] px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-semibold ${pathname === l.href ? 'text-[#2563EB]' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/trilhas" onClick={() => setOpen(false)} className="nb-border rounded-md bg-[#FACC15] px-4 py-2 font-extrabold flex-1 text-center">
              COMEÇAR
            </Link>
            <Link href="/ranking" onClick={() => setOpen(false)} className="nb-border rounded-md bg-[#2563EB] text-white px-4 py-2 font-extrabold flex-1 text-center">
              RANKING
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
