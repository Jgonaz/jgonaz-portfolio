import type { Metadata } from 'next'
import { getDictionary } from '@/app/i18n/get-dictionary'
import { i18n, Locale } from '@/i18n-config'
import type { CvDictionary } from '@/app/[lang]/_interfaces/cvInterface'
import CvBar from '@/app/[lang]/_components/cv/CvBar'
import CvSheet from '@/app/[lang]/_components/cv/CvSheet'
import PageTransition from '@/app/[lang]/_components/PageTransition'
import '@/app/[lang]/_styles/cv.css'

export function generateStaticParams () {
  return i18n.locales.map(lang => ({ lang }))
}

export async function generateMetadata ({
  params
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const { cv } = await getDictionary(lang as Locale)
  return {
    title: cv.metadata.title,
    description: cv.metadata.description
  }
}

export default async function CvPage ({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const cv = dict.cv as CvDictionary

  return (
    <PageTransition>
      <div className='cv-root'>
        <main className='cv-main'>
          <CvBar bar={cv.bar} lang={lang} />
          <CvSheet cv={cv} />
        </main>
      </div>
    </PageTransition>
  )
}
