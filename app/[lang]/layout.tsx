import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/app/[lang]/globals.css'
import Header from '@/app/[lang]/_components/Header'
import Footer from '@/app/[lang]/_components/Footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jorge González Azpillaga - Webdev',
  description: 'Porfolio profesional. Desarrollador Web Front-End.',
  metadataBase: new URL('https://www.jgonaz.dev'),
  openGraph: {
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Imagen de portada de jgonaz.dev'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' style={{ scrollBehavior: 'smooth' }}>
      <body className={`${onest.className} bg-jade-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
