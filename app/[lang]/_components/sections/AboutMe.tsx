'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import Image, { StaticImageData } from 'next/image'
import { Fragment, ReactNode, useContext } from 'react'

import '@/app/[lang]/_styles/aboutMe.css'

import travelPhoto from '@/public/images/about-me/travel.webp'
import valenciaPhoto from '@/public/images/about-me/valencia.webp'
import sportsPhoto from '@/public/images/about-me/sports.webp'
import musicPhoto from '@/public/images/about-me/music.webp'

interface Photo {
  id: 'travel' | 'valencia' | 'sports' | 'music'
  src: StaticImageData
}

interface PhotoTexts {
  caption: string
  alt: string
}

interface Fact {
  label: string
  value: string
}

// El orden coincide con el de `aboutMe.photos` en los diccionarios y con el solape visual (la última queda encima).
const PHOTOS: Photo[] = [
  { id: 'travel', src: travelPhoto },
  { id: 'valencia', src: valenciaPhoto },
  { id: 'sports', src: sportsPhoto },
  { id: 'music', src: musicPhoto }
]

// Iconos de trazo en el orden de `aboutMe.hobbies`: música, deporte, viajes, edición de vídeo y paisajes.
const HOBBY_ICONS: ReactNode[] = [
  <Fragment key='music'>
    <path d='M9 18V5l12-2v13' />
    <circle cx='6' cy='18' r='3' />
    <circle cx='18' cy='16' r='3' />
  </Fragment>,
  <Fragment key='sports'>
    <circle cx='12' cy='12' r='9' />
    <path d='M3.6 9h16.8M3.6 15h16.8' />
    <path d='M12 3a15 15 0 0 1 0 18' />
  </Fragment>,
  <path key='travel' d='M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' />,
  <Fragment key='video'>
    <rect x='2' y='6' width='14' height='12' rx='2' />
    <path d='M22 8l-6 4 6 4z' />
  </Fragment>,
  <Fragment key='landscape'>
    <path d='M3 20l6-9 4 6 3-4 5 7z' />
    <circle cx='17' cy='6' r='2' />
  </Fragment>
]

export default function AboutMe () {
  const { dict } = useContext(TranslationContext)
  const paragraphs: string[] = dict?.aboutMe?.paragraphs ?? []
  const photos: PhotoTexts[] = dict?.aboutMe?.photos ?? []
  const facts: Fact[] = dict?.aboutMe?.facts ?? []
  const hobbies: string[] = dict?.aboutMe?.hobbies ?? []

  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='about-me'
    >
      <div className='container text-pretty px-6 pb-8 sm:px-12 sm:pb-12 md:p-16 lg:p-20 xl:p-24'>
        <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-9 lg:gap-20 lg:items-center'>
          <div
            id='about-me-description'
            className='section-content flex flex-col gap-4 lg:gap-[18px]'
          >
            <h2
              id='about-me-title'
              className='section-title mb-1 lg:mb-2 text-center lg:text-left text-[32px]/10 lg:text-4xl/11 font-extrabold text-white'
            >
              {dict?.aboutMe?.title}
            </h2>
            <p className='text-base/[27px] lg:text-[17px]/[30px] text-white'>
              {dict?.aboutMe?.lead}
            </p>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className='text-sm/6 lg:text-[15px]/[26px] text-zinc-300'
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className='flex flex-col gap-9 lg:gap-7'>
            <div className='about-photos'>
              {PHOTOS.map((photo, index) => (
                <div key={photo.id} className={`about-photo about-photo-${photo.id}`}>
                  <figure>
                    <Image
                      src={photo.src}
                      alt={photos[index]?.alt ?? ''}
                      width={640}
                      height={640}
                      sizes='150px'
                    />
                    <figcaption>{photos[index]?.caption}</figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <dl className='grid grid-cols-[max-content_minmax(0,1fr)] gap-x-4 lg:gap-x-5 gap-y-3 rounded-2xl border border-jade-300/16 bg-jade-950 p-5 lg:p-6'>
              {facts.map((fact) => (
                <div key={fact.label} className='contents'>
                  <dt className='text-[13px]/[22px] font-semibold text-jade-300'>
                    {fact.label}
                  </dt>
                  <dd className='text-[15px]/[22px] text-white'>{fact.value}</dd>
                </div>
              ))}
              <dt className='text-[13px]/[22px] font-semibold text-jade-300'>
                {dict?.aboutMe?.hobbiesLabel}
              </dt>
              <dd className='flex flex-wrap gap-3'>
                {HOBBY_ICONS.map((icon, index) => (
                  <svg
                    key={hobbies[index] ?? index}
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    role='img'
                    aria-label={hobbies[index]}
                    className='text-jade-400'
                  >
                    {icon}
                  </svg>
                ))}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
