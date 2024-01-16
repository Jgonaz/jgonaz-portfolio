import Image from 'next/image'

import '../../_styles/home.css'

export default function Home () {
  return (
    <main
      className='w-screen max-w-full home-h-screen
      top-0 z-[-2] bg-jade-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,229,160,0.4),rgba(255,255,255,0))]'
      id='home'
    >
      <div className='container mx-auto p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex justify-center'>
        <div className='max-w-max mt-24'>
          <p className='text-center sm:text-start text-lg font-normal text-jade-900 lg:text-xl p-0 sm:px-4'>
            ¡Hola! Soy
          </p>
          <h1
            className='text-4xl md:text-5xl lg:text-6xl text-wrap sm:text-nowrap text-center sm:text-start font-extrabold tracking-tight
          bg-gradient-to-br from-jade-950 via-jade-700 to-jade-500 text-transparent bg-clip-text animate-gradient'
            style={{ lineHeight: 1.25 }}
          >
            Jorge González Azpillaga,
          </h1>
          <p className='text-center sm:text-end text-lg font-normal text-jade-900 lg:text-xl p-0 sm:px-4'>
            y desarrollo aplicaciones web.
          </p>
        </div>
        <div className='profile-photo absolute bottom-0 flex justify-center items-end w-full max-w-full min-w-[350px] h-[768px] z-20 translate-y-2rem sm:translate-y-4rem lg:translate-y-6rem'>
          <Image
            src='/profile.png'
            alt='Foto de perfil personal - Jgonaz'
            width={768}
            height={768}
            priority={true}
            sizes='100vw'
            style={{
              filter: 'drop-shadow(0px 0px 2px gray)',
              objectFit: 'scale-down',
              minWidth: '350px',
              maxHeight: '65vh',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </main>
  )
}
