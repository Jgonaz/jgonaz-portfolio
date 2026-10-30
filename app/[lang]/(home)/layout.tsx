import Header from '@/app/[lang]/_components/Header'
import Footer from '@/app/[lang]/_components/Footer'
import PageTransition from '@/app/[lang]/_components/PageTransition'

// Cabecera y pie del sitio: solo la home los lleva; el CV (/[lang]/cv) tiene su propia barra
export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageTransition>
      <Header />
      {children}
      <Footer />
    </PageTransition>
  )
}
