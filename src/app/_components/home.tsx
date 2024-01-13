import Image from 'next/image'

export default function Home () {
  return (
    <main
      className='h-screen w-screen max-w-full top-0 z-[-2] bg-jade-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,229,160,0.4),rgba(255,255,255,0))]'
      id='home'
    >
      <div className='h-screen container mx-auto p-4 md:p-6 lg:p-24 flex justify-center'>
        <div className='max-w-max text-gray-800 mt-16 md:mt-24 lg:mt-32 xl:mt-36'>
          <h3 className='text-start small-heading'>¡Hola! Soy</h3>
          <h1 className='big-heading'>Jorge González Azpillaga,</h1>
          <h3 className='text-end small-heading'>desarrollador web.</h3>
        </div>
        <div className='profile-photo absolute bottom-0 flex justify-center items-end w-full max-w-full min-w-[350px] h-[768px] z-20 translate-y-4rem sm:translate-y-8rem'>
          <Image
            src='/profile.png'
            alt='Foto de perfil personal - Jgonaz'
            width={768}
            height={768}
            priority={true}
            sizes='100vw'
            style={{
              filter: 'drop-shadow(0px 0px 2px gray);',
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
