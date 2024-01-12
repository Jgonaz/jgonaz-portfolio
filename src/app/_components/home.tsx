import Image from 'next/image'

export default function Home () {
  return (
    <main className='min-h-screen w-full' id='home'>
      <div
        className='absolute top-0 z-[-2] h-screen w-screen max-w-full
       bg-jade-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,229,160,0.4),rgba(255,255,255,0))]'
      ></div>
      <div className='relative z-10 flex min-h-screen container mx-auto p-24 pb-0'>
        <div className='text-gray-800 text-pretty w-full text-center flex flex-col justify-end items-center'>
          <div className='max-w-max'>
            <h3 className='text-start small-heading'>¡Hola! Soy</h3>
            <h1 className='big-heading'>Jorge González Azpillaga,</h1>
            <h3 className='text-end small-heading'>desarrollador web.</h3>
          </div>
          <div className='w-full flex justify-center items-end'>
            <Image
              src='/profile.png'
              alt='Foto de perfil personal - Jgonaz'
              width={768}
              height={768}
              priority={true}
              sizes='100vw'
              style={{
                minWidth: '350px',
                maxWidth: '768px',
                filter: 'drop-shadow(0px 0px 2px gray);'
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
