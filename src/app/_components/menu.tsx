import Link from 'next/link'

export default function Menu () {
  return (
    <nav className='hidden md:flex justify-center gap-12 text-md font-semibold text-jade-900'>
      <Link href='#work'>Experiencia</Link>
      <Link href='#education'>Formación</Link>
      <Link href='#contact'>Contacto</Link>
      <Link
        href='https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q/edit'
        target='_blank'
      >
        CV
      </Link>
    </nav>
  )
}
