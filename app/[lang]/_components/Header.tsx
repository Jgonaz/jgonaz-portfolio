'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { useContext } from 'react'

import '@/app/[lang]/_styles/header.css'

import LanguageSelector from '@/app/[lang]/_components/LanguageSelector'

import { CVIcon, WorkIcon } from '@/app/[lang]/_assets/MenuIcons'
import { EducationIcon } from '@/app/[lang]/_assets/MenuIcons'
import { MailIcon } from '@/app/[lang]/_assets/MenuIcons'
import { UserIcon } from '@/app/[lang]/_assets/MenuIcons'

export default function Header () {
  const { dict, lang } = useContext(TranslationContext)

  const toggleMobileMenu = () => {
    if (window.innerWidth < 768) {
      document.querySelector('header')?.classList.toggle('show-mobile-menu')
      document.querySelector('body')?.classList.toggle('overflow-hidden')
    }
  }
  return (
    <header className='bg-transparent absolute w-full z-40 transition-all'>
      <nav className='px-4 md:px-6 py-2.5'>
        <div className='flex flex-wrap md:justify-center items-center mx-auto max-w-screen-xl'>
          <div className='flex md:hidden w-full justify-between items-center md:order-2'>
            <button
              data-collapse-toggle='mobile-menu'
              aria-controls='mobile-menu'
              onClick={toggleMobileMenu}
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-jade-700 rounded-md hover:bg-jade-100 focus:outline-none'
              aria-expanded='false'
            >
              <span className='sr-only'>{dict?.header?.openMainMenu}</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            <div className='mr-4'>
              <LanguageSelector
                className='header-link transition-all text-jade-900 md:py-0'
                selectedLanguage={lang}
                onLanguageChange={() => {
                  window.location.href = `/${lang === 'en' ? 'es' : 'en'}`
                }}
              />
            </div>
          </div>
          <div
            className='opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto justify-center items-center w-full md:flex md:w-auto md:order-1'
            id='mobile-menu'
          >
            <ul className='flex flex-col gap-x-4 mt-4 font-medium md:flex-row md:mt-0'>
              <li>
                {/* Mobile => Download CV */}
                <a
                  href={`https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q/export?format=pdf`}
                  target='_blank'
                  className='md:hidden header-link transition-all flex items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                >
                  <CVIcon className='scale-90' />
                  {dict?.downloadCV}
                </a>
                {/* Desktop => Google Document */}
                <a
                  href={`https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q`}
                  target='_blank'
                  className='hidden md:flex header-link transition-all items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                >
                  {dict?.header?.CV}
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#work'
                  className='header-link transition-all flex items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                  aria-current='page'
                >
                  <WorkIcon className='md:hidden' />
                  {dict?.header?.work}
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#education'
                  className='header-link transition-all flex items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                >
                  <EducationIcon className='md:hidden' />
                  {dict?.header?.education}
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#about-me'
                  className='header-link transition-all flex items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                >
                  <UserIcon className='md:hidden' />
                  {dict?.header?.aboutMe}
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#contact'
                  className='header-link transition-all flex items-center gap-2 py-3 px-4 text-jade-900 md:py-0'
                >
                  <MailIcon className='md:hidden' />
                  {dict?.header?.contact}
                </a>
              </li>
              <li className='hidden md:block'>
                <LanguageSelector
                  className='header-link transition-all text-jade-900 py-3 md:py-0'
                  selectedLanguage={lang}
                  onLanguageChange={() => {
                    window.location.href = `/${lang === 'en' ? 'es' : 'en'}`
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
