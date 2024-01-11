import Image from 'next/image'

export default function Home () {
  return (
    <main className='relative z-10 flex min-h-screen container mx-auto p-24 pb-0'>
      <div className='text-gray-800 text-pretty w-full text-center flex flex-col justify-between'>
        <p>Jorge González Azpillaga</p>
        <div className='w-full flex justify-center items-end'>
          <Image
            src='/profile.png'
            alt='Foto de perfil personal - Jgonaz'
            width={768}
            height={768}
            layout='responsive'
            style={{ minWidth: '350px', maxWidth: '768px' }}
          />
        </div>
      </div>
    </main>
  )
}
