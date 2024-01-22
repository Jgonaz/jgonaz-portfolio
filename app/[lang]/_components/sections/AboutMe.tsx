'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { useContext } from 'react'

import '@/app/[lang]/_styles/aboutMe.css'
import {
  AboutMeIcon,
  SportsIcon,
  MusicIcon,
  TravelIcon,
  VideoIcon,
  LandscapeIcon
} from '../../_assets/AboutMeIcons'

export default function AboutMe () {
  const { dict } = useContext(TranslationContext)
  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0 pb-12 md:pb-4'
      id='about-me'
    >
      <div className='container text-pretty gap-10 p-8 pt-0 sm:p-12 sm:pt-0 md:p-16 lg:p-20 xl:p-24'>
        <div className='flex justify-center flex-wrap md:flex-nowrap gap-8'>
          <div className='flex flex-col items-center sm:items-start'>
            <h2
              id='about-me-title'
              className='section-title text-4xl font-extrabold text-white'
            >
              {dict?.aboutMe?.title}
            </h2>
            <hr className='separator' />
            <div id='about-me-description' className='section-content'>
              <p className='mb-4 md:mb-2 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description1}
              </p>
              <p className='mb-4 md:mb-2 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description2}
              </p>
              <p className='mb-4 md:mb-2 text-sm/6 text-zinc-300'>
                {dict?.aboutMe?.description3}
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='about-me-vectors'>
              <AboutMeIcon width='350' height='350' />
              <div className='icon-container aboutme-sports'>
                <SportsIcon width='65' height='65' />
              </div>
              <div className='icon-container aboutme-music'>
                <MusicIcon width='50' height='50' />
              </div>
              <div className='icon-container aboutme-travel'>
                <TravelIcon width='40' height='40' />
              </div>
              <div className='icon-container aboutme-video'>
                <VideoIcon width='50' height='50' />
              </div>
              <div className='icon-container aboutme-landscape'>
                <LandscapeIcon width='65' height='65' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
