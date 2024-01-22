'use client'

import Image from 'next/image'
import { useContext } from 'react'
import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import profileImage from '@/public/images/profile.png'

import '@/app/[lang]/_styles/home.css'

export default function Home () {
  const { dict } = useContext(TranslationContext)

  return (
    <main
      id='home-screen'
      className='w-screen max-w-full top-0 z-[-2] bg-jade-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,229,160,0.4),rgba(255,255,255,0))]'
    >
      <div className='container p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex justify-center mobile-landscape:pt-4'>
        <div id='home-screen-title' className='max-w-max z-30'>
          <p className='anim-first text-center sm:text-start text-lg font-normal text-jade-900 lg:text-xl p-0 sm:px-4'>
            {dict?.home?.hi}
          </p>
          <div className='anim-second'>
            <h1
              className='text-4xl md:text-5xl lg:text-6xl text-wrap sm:text-nowrap text-center sm:text-start font-extrabold tracking-tight
          bg-gradient-to-br from-jade-950 via-jade-700 to-jade-500 text-transparent bg-clip-text animate-gradient'
              style={{ lineHeight: 1.25 }}
            >
              Jorge González Azpillaga,
            </h1>
          </div>
          <p className='anim-third text-center sm:text-end text-lg font-normal text-jade-900 lg:text-xl p-0 sm:px-4'>
            {dict?.home?.andIDevelopWebApps}
          </p>
        </div>
        <div
          id='home-screen-photo'
          className='absolute bottom-0 flex justify-center items-end w-full max-w-full min-w-[350px] h-[768px] z-20 md:translate-y-4rem lg:translate-y-6rem'
        >
          <Image
            className='anim-first'
            src={profileImage}
            alt='Foto de perfil personal - Jgonaz'
            priority={true}
            sizes='100vw'
          />
        </div>
      </div>
    </main>
  )
}
