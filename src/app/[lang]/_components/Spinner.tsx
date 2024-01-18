import '@/app/[lang]/_styles/spinner.css'

export default function Spinner () {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'></div>
    </div>
  )
}
