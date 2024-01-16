export default function Footer () {
  return (
    <footer className='bg-jade-800'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='flex items-center justify-between gap-1'>
          <div className='text-sm text-jade-50'>
            <p>Made with ♥️</p>
            <p>NextJS, TailwindCSS & TypeScript.</p>
          </div>
          <div className='text-sm text-jade-50 text-end'>
            <a
              href='https://www.linkedin.com/in/jgonzalez-azpillaga/'
              className='hover:underline mr-2'
              target='_blank'
            >
              <span>Jorge González.</span>
            </a>
            <p className='mr-2'>© 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
