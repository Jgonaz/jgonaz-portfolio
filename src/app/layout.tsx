import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jorge González Azpillaga',
  description: 'Porfolio profesional. Desarrollador Web Front-End.'
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
