import '../_styles/backToTop.css'

export default function BackToTop () {
  return (
    <div className='back-to-top w-full z-30'>
      <div className='flex justify-end px-12 pb-4'>
        <a href='#' className='bg-jade-700 flex justify-center items-center'>
          <svg className='arrow-up' viewBox='0 0 24 24'>
            <title>Back to top</title>
            <path d='M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z' />
          </svg>
        </a>
      </div>
    </div>
  )
}
