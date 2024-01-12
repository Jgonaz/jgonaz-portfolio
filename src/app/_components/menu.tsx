import Link from 'next/link'

export default function Menu () {
  return (
    <nav className='flex justify-center gap-12 text-lg font-semibold text-gray-600'>
      <Link href='#work'>Experiencia</Link>
      <Link href='#education'>Formación</Link>
      <Link href='#contact'>Contacto</Link>
    </nav>
  )
}
