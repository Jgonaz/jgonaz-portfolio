import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang='en'>
      <body
        className={`${inter.className} relative min-h-screen w-full bg-white`}
      >
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-jade-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,229,160,0.4),rgba(255,255,255,0))]'>
          {children}
        </div>
      </body>
    </html>
  )
}
