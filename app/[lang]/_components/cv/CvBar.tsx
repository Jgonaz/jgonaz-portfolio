import Link from 'next/link'
import { i18n } from '@/i18n-config'
import type { CvDictionary } from '@/app/[lang]/_interfaces/cvInterface'
import { ArrowLeftIcon, DownloadIcon } from '@/app/[lang]/_components/cv/CvIcons'
import PrintButton from '@/app/[lang]/_components/cv/PrintButton'

// Barra de acciones de la vista web; no se imprime
export default function CvBar ({
  bar,
  lang
}: {
  bar: CvDictionary['bar']
  lang: string
}) {
  return (
    <nav className='cv-bar' aria-label={bar.navLabel}>
      <Link href={`/${lang}`} className='cv-back' transitionTypes={['nav-back']}>
        <ArrowLeftIcon />
        {bar.back}
      </Link>
      <div className='cv-bar-actions'>
        <div role='group' aria-label={bar.language} className='cv-lang'>
          {i18n.locales.map(locale => (
            <Link
              key={locale}
              href={`/${locale}/cv`}
              aria-current={locale === lang ? 'true' : undefined}
              hrefLang={locale}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </div>
        <PrintButton label={bar.print} />
        {/* PDF pregenerado con `pnpm cv:pdf` a partir de esta misma página */}
        <a href={`/cv/jorge-gonzalez-azpillaga-cv-${lang}.pdf`} download className='cv-download'>
          <DownloadIcon />
          {bar.download}
        </a>
      </div>
    </nav>
  )
}
