'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { useContext } from 'react'

import '@/app/[lang]/_styles/aboutMe.css'

import aboutMeImage from '@/public/images/aboutMe-me.png'
import aboutMeSports from '@/public/images/aboutMe-sports.png'
import aboutMeMusic from '@/public/images/aboutMe-music.png'
import aboutMeTravel from '@/public/images/aboutMe-travel.png'
import aboutMeVideo from '@/public/images/aboutMe-video.png'
import aboutMeLandscape from '@/public/images/aboutMe-landscape.png'

export default function AboutMe () {
  const { dict } = useContext(TranslationContext)
  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='about-me'
    >
      <div className='container text-pretty gap-10 p-8 pt-0 sm:p-12 sm:pt-0 md:p-16 lg:p-20 xl:p-24'>
        <div className='flex justify-center flex-wrap lg:flex-nowrap gap-8'>
          <div className='flex flex-col items-center md:items-start'>
            <h2
              id='about-me-title'
              className='section-title text-4xl font-extrabold text-white mb-16 md:mb-0'
            >
              {dict?.aboutMe?.title}
            </h2>
            <hr className='separator hidden md:block' />
            <div id='about-me-description' className='section-content'>
              <p className='mb-4 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description1}
              </p>
              <p className='mb-4 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description2}
              </p>
              <p className='mb-4 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description3}
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mb-8 md:mb-0'>
            <div className='about-me-vectors'>
              <img
                src={aboutMeImage.src}
                alt='About me vector'
                width='350'
                height='350'
              />
              <div className='icon-container aboutme-sports'>
                <img src={aboutMeSports.src} alt='About me - Sports vector' />
              </div>
              <div className='icon-container aboutme-music'>
                <img src={aboutMeMusic.src} alt='About me - Music vector' />
              </div>
              <div className='icon-container aboutme-travel'>
                <img src={aboutMeTravel.src} alt='About me - Travel vector' />
              </div>
              <div className='icon-container aboutme-video'>
                <img src={aboutMeVideo.src} alt='About me - Video vector' />
              </div>
              <div className='icon-container aboutme-landscape'>
                <img
                  src={aboutMeLandscape.src}
                  alt='About me - Landscape vector'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
