import { getDictionary } from '@/app/i18n/get-dictionary'
import { Locale } from '@/i18n-config'
import { TranslationProvider } from '@/app/[lang]/_contexts/TranslationContext'

import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/app/[lang]/globals.css'
import Header from '@/app/[lang]/_components/Header'
import Footer from '@/app/[lang]/_components/Footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    process.env.NODE_ENV === 'development'
      ? '[DEV] Jorge González Azpillaga'
      : 'Jorge González Azpillaga - Webdev',
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

export default async function RootLayout ({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}) {
  const dict = await getDictionary(lang)
  return (
    <html lang={lang}>
      <TranslationProvider dict={dict} lang={lang}>
        <body className={onest.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </TranslationProvider>
    </html>
  )
}
