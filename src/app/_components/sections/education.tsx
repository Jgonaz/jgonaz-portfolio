import educationData from '../../_data/education.json'

export default function Education () {
  return (
    <section
      className='timeline bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0 pb-12 md:pb-4'
      id='education'
    >
      <div className='container mx-auto text-pretty gap-10 p-8 pt-0 sm:p-12 sm:pt-0 md:p-16 lg:p-20 xl:p-24'>
        <div className='flex flex-col justify-center'>
          <div
            id='work-title'
            className='flex justify-center sm:justify-start mb-16 md:mb-0'
          >
            <h2 className='text-4xl font-extrabold text-white md:mb-8'>
              Formación
            </h2>
          </div>
          <div id='work-description' className='flex'>
            {/* Mobile vertical timeline */}
            <ul role='list' className='sm:hidden max-w-screen-md'>
              {educationData.map((education, index) => (
                <li
                  key={index}
                  className='group relative flex flex-col pb-8 pl-7 last:pb-0'
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
              ))}
            </ul>
            {/* Desktop horizontal timeline */}
            <ul role='list' className='hidden sm:flex'>
              {educationData.map((education, index) => (
                <li key={index} className='relative mb-6 sm:mb-0'>
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
              ))}
            </ul>
          </div>
          <div className='flex md:hidden justify-center w-full mt-12'>
            <a
              href='https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q/export?format=pdf'
              className='download-cv-btn text-white bg-jade-700 hover:bg-jade-800 focus:ring-1 focus:ring-jade-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
