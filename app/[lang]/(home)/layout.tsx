import Header from '@/app/[lang]/_components/Header'
import Footer from '@/app/[lang]/_components/Footer'
import PageTransition from '@/app/[lang]/_components/PageTransition'
import SmoothScroll from '@/app/[lang]/_components/SmoothScroll'

// Cabecera, pie y scroll suave del sitio: solo la home los lleva; el CV (/[lang]/cv) tiene
// su propia barra y scroll nativo, que no interfiere con la impresión
export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageTransition>
      <SmoothScroll />
      <Header />
      {children}
      <Footer />
    </PageTransition>
  )
}
