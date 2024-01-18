'use client'

import '@/app/[lang]/_styles/header.css'

import { WorkIcon } from '@/app/[lang]/_assets/Icons'
import { EducationIcon } from '@/app/[lang]/_assets/Icons'
import { MailIcon } from '@/app/[lang]/_assets/Icons'
import { UserIcon } from '@/app/[lang]/_assets/Icons'

export default function Header () {
  const toggleMobileMenu = () => {
    if (window.innerWidth <= 768) {
      document.querySelector('header')?.classList.toggle('show-mobile-menu')
      document.querySelector('body')?.classList.toggle('overflow-hidden')
    }
  }
  return (
    <header className='bg-transparent absolute w-full z-40 transition-all'>
      <nav className='px-4 md:px-6 py-2.5'>
        <div className='flex flex-wrap md:justify-center items-center mx-auto max-w-screen-xl'>
          <div className='flex items-center md:order-2'>
            <button
              data-collapse-toggle='mobile-menu'
              aria-controls='mobile-menu'
              onClick={toggleMobileMenu}
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-jade-700 rounded-md md:hidden hover:bg-jade-100 focus:outline-none'
              aria-expanded='false'
            >
              <span className='sr-only'>Abrir menú principal</span>
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
          </div>
          <div
            className='opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto justify-center items-center w-full md:flex md:w-auto md:order-1'
            id='mobile-menu'
          >
            <ul className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#work'
                  className='header-link transition-all flex items-center gap-2 py-3 pr-4 pl-3 text-jade-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-primary-700 md:p-0'
                  aria-current='page'
                >
                  <WorkIcon className='md:hidden' />
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#education'
                  className='header-link transition-all flex items-center gap-2 py-3 pr-4 pl-3 text-jade-900 hover:bg-gray-50 md:hover:bg-transparent  md:hover:text-primary-700 md:p-0'
                >
                  <EducationIcon className='md:hidden' />
                  Formación
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href='#contact'
                  className='header-link transition-all flex items-center gap-2 py-3 pr-4 pl-3 text-jade-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-primary-700 md:p-0'
                >
                  <MailIcon className='md:hidden' />
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href='https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q'
                  target='_blank'
                  className='header-link transition-all flex items-center gap-2 py-3 pr-4 pl-3 text-jade-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-primary-700 md:p-0'
                >
                  <UserIcon className='md:hidden' />
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
