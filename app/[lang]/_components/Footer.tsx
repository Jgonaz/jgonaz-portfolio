export default function Footer () {
  return (
    <footer className='bg-jade-800 text-sm text-jade-50'>
      <div className='container text-pretty py-6 lg:py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between gap-1'>
        <div>
          <p>Made with 💚</p>
          <p>NextJS, TailwindCSS & TypeScript.</p>
        </div>
        <div className='text-end'>
          <a
            href='https://www.linkedin.com/in/jgonaz/'
            className='hover:underline mr-2'
            target='_blank'
          >
            <span>Jorge González.</span>
          </a>
          <p className='mr-2'>© 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
