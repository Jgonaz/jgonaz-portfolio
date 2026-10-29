'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import Image, { StaticImageData } from 'next/image'
import { MouseEvent, useContext } from 'react'

import '@/app/[lang]/_styles/section.css'
import '@/app/[lang]/_styles/sideProjects.css'

import fitnessiaLogo from '@/public/images/side-projects/fitnessia-logo.svg'
import fitnessiaLanding from '@/public/images/side-projects/fitnessia-landing.jpg'
import fitnessiaMobile from '@/public/images/side-projects/fitnessia-mobile.webp'
import balanzioLogo from '@/public/images/side-projects/balanzio-logo.png'
import balanzioLanding from '@/public/images/side-projects/balanzio-landing.jpg'
import balanzioMobile from '@/public/images/side-projects/balanzio-mobile.jpg'

interface SideProject {
  id: 'fitnessia' | 'balanzio'
  name: string
  url: string
  logo: StaticImageData
  desktopShot: StaticImageData
  mobileShot: StaticImageData
  screenBackground: string
  // El logo de Balanz.io es transparente y necesita fondo claro; el de Fitnessia ya trae su placa.
  logoBackground?: string
}

interface SideProjectTexts {
  description: string
  tags: string[]
  desktopAlt: string
  mobileAlt: string
}

const PROJECTS: SideProject[] = [
  {
    id: 'fitnessia',
    name: 'Fitnessia',
    url: 'https://fitnessia.jgonaz.dev',
    logo: fitnessiaLogo,
    desktopShot: fitnessiaLanding,
    mobileShot: fitnessiaMobile,
    screenBackground: '#f5f4f1'
  },
  {
    id: 'balanzio',
    name: 'Balanz.io',
    url: 'https://balanz-io.jgonaz.dev',
    logo: balanzioLogo,
    desktopShot: balanzioLanding,
    mobileShot: balanzioMobile,
    screenBackground: '#eef6f8',
    logoBackground: 'bg-jade-50'
  }
]

// Expone la posición del cursor como variables CSS para inclinar la ventana sin re-renderizar.
const handleTilt = (event: MouseEvent<HTMLDivElement>) => {
  const stage = event.currentTarget
  const rect = stage.getBoundingClientRect()
  stage.style.setProperty('--sp-x', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3))
  stage.style.setProperty('--sp-y', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3))
}

const resetTilt = (event: MouseEvent<HTMLDivElement>) => {
  event.currentTarget.style.setProperty('--sp-x', '0')
  event.currentTarget.style.setProperty('--sp-y', '0')
}

export default function SideProjects () {
  const { dict } = useContext(TranslationContext)
  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='side-projects'
    >
      <div className='container text-pretty px-6 sm:px-12 md:p-16 md:pb-0 lg:p-20 lg:pb-0 xl:p-24 xl:pb-0'>
        <div className='section-title flex flex-col items-center lg:items-start gap-3 mb-12 lg:mb-16 text-center lg:text-left'>
          <h2 className='text-4xl font-extrabold text-white'>
            {dict?.sideProjects?.title}
          </h2>
          <p className='max-w-xl text-[15px]/6 lg:text-base/7 text-zinc-300'>
            {dict?.sideProjects?.subtitle}
          </p>
        </div>

        <div className='flex flex-col gap-16 lg:gap-24'>
          {PROJECTS.map((project, index) => {
            const texts: SideProjectTexts | undefined =
              dict?.sideProjects?.projects?.[project.id]
            const mirrored = index % 2 === 1
            const side = mirrored ? 'sp-right' : 'sp-left'
            return (
              <article
                key={project.id}
                className='side-project grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-7 lg:gap-16 items-center'
              >
                {/* Móvil y tablet: teléfono con la captura de la app */}
                <div className='sp-stage flex justify-center pt-6 pb-12 lg:hidden'>
                  <div className='sp-enter'>
                    <div className={`sp-float ${side}`}>
                      <div className='sp-phone'>
                        <div
                          className='sp-phone-screen'
                          style={{ background: project.screenBackground }}
                        >
                          <Image
                            src={project.mobileShot}
                            alt={texts?.mobileAlt ?? project.name}
                            sizes='214px'
                            className='h-full w-full object-cover object-top'
                          />
                        </div>
                        <div className='sp-phone-island' aria-hidden='true'></div>
                      </div>
                    </div>
                  </div>
                  <div className={`sp-floor ${side}`} aria-hidden='true'></div>
                </div>

                {/* Escritorio: ventana de navegador con la portada completa */}
                <div
                  className={`sp-stage sp-interactive hidden lg:block pt-6 pb-12 ${mirrored ? 'lg:order-last' : ''}`}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className='sp-enter'>
                    <div className={`sp-float ${side}`}>
                      <div className='sp-tilt'>
                        <div className='sp-browser'>
                          <div className='sp-browser-bar'>
                            <div className='flex gap-[7px]' aria-hidden='true'>
                              <span className='sp-dot bg-[#ff5f57]'></span>
                              <span className='sp-dot bg-[#febc2e]'></span>
                              <span className='sp-dot bg-[#28c840]'></span>
                            </div>
                            <div className='flex grow justify-center'>
                              <span className='sp-address'>
                                <svg
                                  width='10'
                                  height='10'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth='2.4'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  aria-hidden='true'
                                >
                                  <rect x='5' y='11' width='14' height='10' rx='2' />
                                  <path d='M8 11V7a4 4 0 0 1 8 0v4' />
                                </svg>
                                {new URL(project.url).host}
                              </span>
                            </div>
                            <div className='w-[47px]'></div>
                          </div>
                          <div
                            className='sp-viewport'
                            style={{ background: project.screenBackground }}
                          >
                            <Image
                              src={project.desktopShot}
                              alt={texts?.desktopAlt ?? project.name}
                              sizes='(min-width: 1280px) 600px, 50vw'
                              className='sp-scroll block w-full h-auto'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`sp-floor ${side}`} aria-hidden='true'></div>
                </div>

                <div className='section-content flex flex-col gap-4 lg:gap-[18px]'>
                  <div className='flex items-center gap-3 lg:gap-3.5'>
                    <Image
                      src={project.logo}
                      alt=''
                      sizes='48px'
                      className={`h-11 w-11 lg:h-12 lg:w-12 rounded-xl object-contain ${project.logoBackground ?? ''}`}
                    />
                    <div className='flex flex-col gap-0.5'>
                      <div className='flex flex-wrap items-center gap-2 lg:gap-2.5'>
                        <h3 className='text-2xl lg:text-[28px]/[34px] font-extrabold text-white'>
                          {project.name}
                        </h3>
                        <span className='inline-flex items-center gap-1.5 rounded-full border border-jade-300/40 px-2.5 py-0.5 text-xs font-medium text-jade-300'>
                          <span
                            className='h-1.5 w-1.5 rounded-full bg-jade-400'
                            aria-hidden='true'
                          ></span>
                          {dict?.sideProjects?.inProduction}
                        </span>
                      </div>
                      <p className='text-[13px]/[18px] text-jade-200'>
                        {dict?.sideProjects?.role}
                      </p>
                    </div>
                  </div>
                  <p className='text-sm/6 lg:text-[15px]/[26px] text-zinc-300'>
                    {texts?.description}
                  </p>
                  <ul role='list' className='flex flex-wrap gap-2'>
                    {texts?.tags.map(tag => (
                      <li
                        key={tag}
                        className='rounded-full bg-jade-950 px-2.5 py-1 text-xs font-medium text-jade-200'
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className='flex pt-1'>
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex w-full lg:w-auto min-h-12 lg:min-h-11 items-center justify-center gap-2 rounded-lg bg-jade-700 px-5 text-[15px] lg:text-sm font-medium text-white hover:bg-jade-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-jade-300'
                    >
                      {dict?.sideProjects?.visit} {project.name}
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                      >
                        <path d='M7 17 17 7' />
                        <path d='M8 7h9v9' />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
