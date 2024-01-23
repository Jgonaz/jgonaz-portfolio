'use client'

import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { useContext } from 'react'

import InfiniteSlide from '@/app/[lang]/_components/InfiniteSlide'

export default function Education () {
  const { dict } = useContext(TranslationContext)
  return (
    <section
      className='section bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='education'
    >
      <div className='container text-pretty gap-10 px-8 sm:px-12 md:p-16 md:pb-0 lg:p-20 lg:pb-0 xl:p-24 xl:pb-0'>
        <div className='flex flex-col justify-center'>
          <div
            id='education-title'
            className='section-title flex justify-center md:justify-start mb-16 md:mb-0'
          >
            <h2 className='text-4xl font-extrabold text-white md:mb-8'>
              {dict?.education?.title}
            </h2>
          </div>
          <div id='education-description' className='flex'>
            {/* Mobile vertical timeline */}
            <ul role='list' className='sm:hidden'>
              {dict?.education?.data.map(
                (
                  education: {
                    title: string
                    duration: string
                    center: string
                    description: string
                  },
                  index: number
                ) => (
                  <li
                    key={index}
                    className='timeline-item group relative flex flex-col pb-8 pl-7 last:pb-0'
                  >
                    <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                    <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-600'></div>
                    <p className='order-first font-semibold text-jade-200'>
                      {education.title}
                    </p>
                    <p className='mt-2 text-sm/4 text-jade-500'>
                      {education.duration}
                    </p>
                    <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                      {education.center}
                    </h3>
                    <p className='mt-0.5 text-sm/6 text-zinc-300'>
                      {education.description}
                    </p>
                  </li>
                )
              )}
            </ul>
            {/* Desktop horizontal timeline */}
            <ul role='list' className='hidden sm:flex'>
              {dict?.education?.data.map(
                (
                  education: {
                    title: string
                    duration: string
                    center: string
                    description: string
                  },
                  index: number
                ) => (
                  <li
                    key={index}
                    className='timeline-item relative mb-6 sm:mb-0'
                  >
                    <div className='flex items-center'>
                      <div className='absolute left-0 top-0 h-2 w-2 rounded-full border border-jade-300 bg-jade-600 z-10'></div>
                      <div
                        className='absolute hidden sm:flex w-full h-px bg-white/30'
                        style={{ top: '3px' }}
                      ></div>
                    </div>
                    <div className='mt-6 sm:pe-8'>
                      <p className='order-first font-semibold text-jade-200'>
                        {education.title}
                      </p>
                      <p className='mt-2 text-sm/4 text-jade-500'>
                        {education.duration}
                      </p>
                      <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                        {education.center}
                      </h3>
                      <p className='mt-0.5 text-sm/6 text-zinc-300'>
                        {education.description}
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className='slide-container mt-16 mg:pt-20 xl:mt-24'>
          <InfiniteSlide />
        </div>
      </div>
    </section>
  )
}
