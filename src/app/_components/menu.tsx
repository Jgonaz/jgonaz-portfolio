import Link from 'next/link'

export default function Menu () {
  return (
    <nav className='hidden md:flex justify-center gap-12 text-md font-semibold text-jade-900'>
      <Link href='#work'>Experiencia</Link>
      <Link href='#education'>Formación</Link>
      <Link href='#contact'>Contacto</Link>
      <Link href='#contact'>CV</Link>
    </nav>
  )
}
