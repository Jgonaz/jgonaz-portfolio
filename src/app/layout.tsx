import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import Header from './_components/header'
import Footer from './_components/footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jorge González Azpillaga - Developer',
  description:
    'Professional portfolio. Made with NextJS v14, Tailwind & TypeScript - ©️ 2024'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' style={{ scrollBehavior: 'smooth' }}>
      <body className={onest.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
