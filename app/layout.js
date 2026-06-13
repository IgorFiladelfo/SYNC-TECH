import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SYNC-TECH — Aprenda programação do zero',
  description: 'Plataforma educativa para iniciantes em programação: trilhas, vídeos, quiz e ranking.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
