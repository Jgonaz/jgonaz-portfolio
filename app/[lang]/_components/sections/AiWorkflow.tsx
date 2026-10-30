'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { JetBrains_Mono } from 'next/font/google'
import { ReactNode, useContext, useId } from 'react'

import '@/app/[lang]/_styles/section.css'
import '@/app/[lang]/_styles/aiWorkflow.css'

// La tipografía mono solo se usa en el eyebrow y en la numeración de los pasos.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap'
})

const REPO_URL = 'https://github.com/Jgonaz/jdev-ai'

interface Step {
  title: string
  description: string
}

interface Principle {
  title: string
  description: string
}

interface TeamCase {
  badge: string
  title: string
  description: string
  tags: string[]
  note: string
}

interface PersonalCase {
  badge: string
  title: string
  description: string
  tags: string[]
  cta: string
}

// Un icono por principio, en el mismo orden que `ai.principles` de los diccionarios.
const PRINCIPLE_ICONS: ReactNode[] = [
  <>
    <rect x='3' y='4' width='18' height='16' rx='2' />
    <path d='M3 9h18' />
    <path d='M8 14h8' />
  </>,
  <>
    <circle cx='12' cy='12' r='9' />
    <path d='M12 7v10' />
    <path d='M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3.2 6 1.7 6 5 0 1.4-1.3 2.7-3 2.7s-3-1.1-3-2.5' />
  </>,
  <>
    <path d='M9 3v4' />
    <path d='M15 3v4' />
    <path d='M7 7h10v4a5 5 0 0 1-10 0z' />
    <path d='M12 16v5' />
  </>,
  <>
    <path d='M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z' />
    <path d='M9 12l2 2 4-4' />
  </>,
  <>
    <circle cx='6' cy='5' r='2' />
    <circle cx='6' cy='19' r='2' />
    <circle cx='18' cy='8' r='2' />
    <path d='M6 7v10' />
    <path d='M18 10c0 4-6 3-12 7' />
  </>
]

function TagList ({ tags }: { tags: string[] }) {
  return (
    <ul role='list' className='flex flex-wrap gap-2'>
      {tags.map(tag => (
        <li
          key={tag}
          className='rounded-full bg-jade-900 px-2.5 py-1 text-xs/[18px] font-medium text-jade-200'
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

// Robot decorativo que se asoma por detrás del borde superior de una tarjeta de paso.
function PeekingRobot ({ className }: { className: string }) {
  // Cada instancia necesita su propio clipPath: hay una para móvil y otra para escritorio.
  const clipId = useId()
  return (
    <svg viewBox='0 0 96 76' aria-hidden='true' className={`absolute ${className}`}>
      <defs>
        <clipPath id={clipId}>
          {/* Recorta la cabeza a la altura del borde de la tarjeta para que parezca detrás */}
          <rect x='0' y='0' width='96' height='64' />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <g className='ai-robot-peek'>
          <path d='M48 12V5' stroke='#81f4c3' strokeWidth='2.5' strokeLinecap='round' />
          <circle cx='48' cy='4' r='3.5' fill='#43e5a0' />
          <rect x='8' y='36' width='7' height='16' rx='3' fill='#43e5a0' />
          <rect x='81' y='36' width='7' height='16' rx='3' fill='#43e5a0' />
          <rect x='14' y='12' width='68' height='64' rx='9' fill='#03301f' stroke='#81f4c3' strokeWidth='2.5' />
          <path d='M15.5 25H80.5' stroke='#81f4c3' strokeWidth='2' />
          <circle cx='23' cy='18.5' r='2.3' fill='#ff5f57' />
          <circle cx='30.5' cy='18.5' r='2.3' fill='#febc2e' />
          <circle cx='38' cy='18.5' r='2.3' fill='#28c840' />
          {/* Ojos como círculos (antes un <text> «•  •»): Safari calcula mal la caja de un
              texto SVG y el parpadeo los desplazaba hacia arriba en lugar de cerrarlos */}
          <g className='ai-robot-eyes' fill='#43e5a0'>
            <circle cx='36' cy='37.7' r='2.7' />
            <circle cx='60' cy='37.7' r='2.7' />
          </g>
          <path d='M40.5 49.5q7.5 6 15 0' fill='none' stroke='#43e5a0' strokeWidth='3' strokeLinecap='round' />
        </g>
      </g>
      <rect x='16' y='58' width='20' height='14' rx='7' fill='#81f4c3' />
      <rect x='60' y='58' width='20' height='14' rx='7' fill='#81f4c3' />
    </svg>
  )
}

function CaseBadge ({ children }: { children: ReactNode }) {
  return (
    <span className='self-start rounded-full border border-jade-300/40 px-2.5 py-[3px] text-xs/4 font-medium text-jade-300'>
      {children}
    </span>
  )
}

export default function AiWorkflow () {
  const { dict } = useContext(TranslationContext)
  const ai = dict?.ai
  const steps: Step[] = ai?.steps ?? []
  const principles: Principle[] = ai?.principles ?? []
  const team: TeamCase | undefined = ai?.cases?.team
  const personal: PersonalCase | undefined = ai?.cases?.personal

  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='ai'
    >
      <div className='container text-pretty px-6 sm:px-12 md:p-16 md:pb-0 lg:p-20 lg:pb-0 xl:p-24 xl:pb-0'>
        <div className='flex flex-col gap-11 md:gap-16'>
          <div className='section-title flex flex-col items-center md:items-start gap-2.5 md:gap-3 max-w-[760px] text-center md:text-left'>
            <span
              className={`${jetbrainsMono.className} text-xs/4 md:text-[13px]/[18px] uppercase tracking-[0.04em] text-jade-300`}
            >
              {ai?.eyebrow}
            </span>
            <h2 className='text-[32px]/10 md:text-4xl/11 font-extrabold text-white'>
              {ai?.title}
            </h2>
            <p className='text-[15px]/6 md:text-base/[26px] text-zinc-300'>
              {ai?.subtitle}
            </p>
          </div>

          {/* Flujo de un cambio */}
          <div className='flex flex-col gap-4 md:gap-5'>
            <h3 className='text-sm/5 font-semibold text-jade-200'>
              {ai?.flowTitle}
            </h3>
            <ol
              role='list'
              className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3'
            >
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1
                return (
                  <li
                    key={step.title}
                    className={`relative flex gap-3.5 md:flex-col md:gap-2 rounded-xl border p-4 md:p-5 ${
                      isLast
                        ? 'bg-jade-700 border-jade-300/40'
                        : 'bg-jade-950 border-jade-300/16'
                    }`}
                  >
                    {/* En móvil se asoma por el primer paso y en escritorio por el último */}
                    {index === 0 && (
                      <PeekingRobot className='md:hidden w-20 h-[63px] -top-[53px] right-5' />
                    )}
                    {isLast && (
                      <PeekingRobot className='hidden lg:block w-24 h-[76px] -top-16 right-7' />
                    )}
                    <span
                      className={`${jetbrainsMono.className} text-xs/[22px] md:text-xs/4 ${
                        isLast ? 'text-white' : 'text-jade-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className='flex flex-col gap-0.5 md:gap-2'>
                      <strong className='text-[15px]/[22px] md:text-base/[22px] font-semibold text-white'>
                        {step.title}
                      </strong>
                      <span
                        className={`text-[13px]/5 ${
                          isLast ? 'text-white' : 'text-zinc-300'
                        }`}
                      >
                        {step.description}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Principios */}
          <ul
            role='list'
            className='section-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-7 py-7 md:py-8 border-y border-jade-300/16'
          >
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className='flex gap-3.5 md:flex-col md:gap-2.5'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                  className='h-[22px] w-[22px] md:h-6 md:w-6 shrink-0 text-jade-400'
                >
                  {PRINCIPLE_ICONS[index]}
                </svg>
                <div className='flex flex-col gap-1 md:gap-2.5'>
                  <h4 className='text-[15px]/[22px] md:text-base/[22px] font-semibold text-white'>
                    {principle.title}
                  </h4>
                  <p className='text-sm/[22px] text-zinc-300'>
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Casos */}
          <div className='section-content grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6'>
            {team && (
              <article className='flex flex-col gap-3.5 md:gap-4 rounded-2xl border border-jade-300/16 bg-jade-950 p-6 md:p-8'>
                <CaseBadge>{team.badge}</CaseBadge>
                <h3 className='text-[21px]/7 md:text-2xl/[30px] font-extrabold text-white'>
                  {team.title}
                </h3>
                <p className='text-sm/6 md:text-[15px]/[26px] text-zinc-300'>
                  {team.description}
                </p>
                <TagList tags={team.tags} />
                <p className='md:pt-1 text-[13px]/5 text-jade-200'>
                  {team.note}
                </p>
              </article>
            )}

            {personal && (
              <article className='flex flex-col gap-3.5 md:gap-4 rounded-2xl border border-jade-300/16 bg-jade-950 p-6 md:p-8'>
                <CaseBadge>{personal.badge}</CaseBadge>
                <h3 className='text-[21px]/7 md:text-2xl/[30px] font-extrabold text-white'>
                  {personal.title}
                </h3>
                <p className='text-sm/6 md:text-[15px]/[26px] text-zinc-300'>
                  {personal.description}
                </p>
                <TagList tags={personal.tags} />
                <div className='flex md:pt-1'>
                  <a
                    href={REPO_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex w-full md:w-auto min-h-12 md:min-h-11 items-center justify-center gap-2 rounded-lg bg-jade-700 px-5 text-[15px] md:text-sm font-medium text-white hover:bg-jade-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-jade-300'
                  >
                    {personal.cta}
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
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
