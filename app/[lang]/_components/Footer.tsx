'use client'

import { useContext } from 'react'
import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { LINKEDIN_URL } from '@/app/utils/constants'

export default function Footer () {
  const { dict } = useContext(TranslationContext)
  return (
    <footer className='bg-jade-800 text-sm text-jade-50'>
      <div className='container text-pretty py-6 lg:py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between gap-1'>
        <div>
          <p>{dict?.footer?.madeWith}</p>
          <p>NextJS, TailwindCSS & TypeScript.</p>
        </div>
        <div className='text-end'>
          <a
            href={LINKEDIN_URL}
            className='hover:underline mr-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Jorge González.</span>
          </a>
          <p className='mr-2'>
            © {new Date().getFullYear()}. {dict?.footer?.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
