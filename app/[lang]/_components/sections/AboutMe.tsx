'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import AnimatedText from '@/app/[lang]/_components/AnimatedText'
import Image, { StaticImageData } from 'next/image'
import { useContext } from 'react'

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

// El orden coincide con el de `aboutMe.photos` en los diccionarios y con el solape visual (la última queda encima).
const PHOTOS: Photo[] = [
  { id: 'travel', src: travelPhoto },
  { id: 'valencia', src: valenciaPhoto },
  { id: 'sports', src: sportsPhoto },
  { id: 'music', src: musicPhoto }
]

export default function AboutMe () {
  const { dict } = useContext(TranslationContext)
  const paragraphs: string[] = dict?.aboutMe?.paragraphs ?? []
  const photos: PhotoTexts[] = dict?.aboutMe?.photos ?? []

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
              <AnimatedText text={dict?.aboutMe?.title} />
            </h2>
            <p className='text-base/[27px] lg:text-[17px]/[30px] text-white'>
              <AnimatedText text={dict?.aboutMe?.lead} mode='fade' />
            </p>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className='text-sm/6 lg:text-[15px]/[26px] text-zinc-300'
              >
                <AnimatedText text={paragraph} mode='fade' />
              </p>
            ))}
          </div>

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
                  <figcaption>
                    <AnimatedText text={photos[index]?.caption} />
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
