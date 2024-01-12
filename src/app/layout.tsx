import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import Menu from './_components/menu'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jorge González Azpillaga - Webdev',
  description:
    'Professional portfolio, made with NextJS, Tailwind & TypeScript - ©️ 2024'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' style={{ scrollBehavior: 'smooth' }}>
      <body className={onest.className}>
        <header className='absolute w-full flex justify-center p-4 z-20'>
          <Menu />
        </header>
        {children}
        <footer>
          <p>©️ 2024 Jorge González Azpillaga - Webdev</p>
        </footer>
      </body>
    </html>
  )
}
