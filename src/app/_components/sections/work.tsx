'use client'
import { useEffect } from 'react'
import workData from '../../_data/work.json'

export default function Work () {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const handleScroll = () => {
      const div = document.getElementById('work-title') as HTMLDivElement
      const title = div.getElementsByTagName('h2')[0] as HTMLHeadingElement
      div.style.minWidth = `${title.offsetWidth}px`

      const topPosition = div?.getBoundingClientRect().top

      if (topPosition > 20) {
        div.classList.remove('items-end', 'mb-12')
        title.classList.remove('fixed', 'top-5')
      } else {
        div.classList.remove('items-end')
        title.classList.add('fixed', 'top-5')
        if (div.offsetHeight - Math.abs(topPosition) <= 20 + 40 + 88) {
          div.classList.add('items-end')
          title.classList.remove('fixed', 'top-5')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <section
      className='bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0'
      id='work'
    >
      <div className='container mx-auto  text-pretty gap-10 px-8 sm:px-12 md:p-16 md:pb-0 lg:p-20 lg:pb-0 xl:p-24 xl:pb-0'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div id='work-title' className='flex justify-center mb-16 md:mb-0'>
            <h2 className='text-4xl font-extrabold text-white md:mb-22'>
              Experiencia
            </h2>
          </div>
          <div id='work-description' className='flex flex-col items-end'>
            <ul role='list' className='md:mx-8 max-w-screen-md'>
              {workData.map((job, index) => (
                <li
                  key={index}
                  className='group relative flex flex-col pb-8 pl-7 last:pb-0'
                >
                  <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                  <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-600'></div>
                  <p className='order-first font-semibold text-jade-200'>
                    {job.company}
                  </p>
                  <p className='mt-2 text-sm/4 text-jade-500'>{job.duration}</p>
                  <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                    {job.position}
                  </h3>
                  <p className='mt-0.5 text-sm/6 text-zinc-300'>
                    {job.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className='hidden md:flex flex-col items-end justify-center w-full mt-12'>
              <a
                href='https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q/export?format=pdf'
                className='text-white bg-jade-700 hover:bg-jade-800 focus:ring-1 focus:ring-jade-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
