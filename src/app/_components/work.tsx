'use client'

import { useEffect } from 'react'

export default function Work () {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const handleScroll = () => {
      const div = document.getElementById('work-title') as HTMLDivElement
      const title = div.getElementsByTagName('h2')[0] as HTMLHeadingElement
      div.style.minWidth = `${title.offsetWidth}px`

      const topPosition = div?.getBoundingClientRect().top

      if (topPosition > 20 /*1.25rem*/) {
        div.classList.remove('items-end', 'mb-12')
        title.classList.remove('fixed', 'top-5')
      } else {
        div.classList.remove('items-end')
        title.classList.add('fixed', 'top-5')
        if (
          div.offsetHeight - Math.abs(topPosition) <=
          20 + 40 + 88 /*1.25rem + 2.5rem + 5.5rem*/
        ) {
          div.classList.add('items-end')
          title.classList.remove('fixed', 'top-5')
        }
      }
    }

    window.addEventListener('scroll', () => {
      handleScroll()
    })
  }, [])

  return (
    <section
      className='bg-jade-900 relative z-30 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0 '
      id='work'
    >
      <div className='container mx-auto  text-pretty gap-10 p-8 pt-0 sm:p-12 sm:pt-0 md:p-16 lg:p-20 xl:p-24'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div id='work-title' className='flex justify-center mb-16 md:mb-0'>
            <h2 className='text-4xl font-extrabold text-white md:mb-22'>
              Experiencia
            </h2>
          </div>
          <div id='work-description' className='flex flex-col items-end'>
            <ul role='list' className='md:mx-8 max-w-screen-md'>
              <li className='group relative flex flex-col pb-8 pl-7 last:pb-0'>
                <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-300'></div>
                <p className='order-first font-semibold text-jade-200'>
                  Nyxell App S.L.
                </p>
                <p className='mt-2 text-sm/4 text-jade-500'>2022-2023</p>
                <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                  Senior Front-End Developer
                </h3>
                <p className='mt-0.5 text-sm/6 text-zinc-300'>
                  Marketplace innovador dedicado a la venta de entradas de ocio
                  nocturno. Nyxell fusiona rapidez, seguridad y simplicidad para
                  ofrecer una experiencia de compra excepcional. Enfocada en una
                  atención al cliente personalizada, proporciona soporte
                  integral desde la compra hasta el acceso a través de nuestros
                  embajadores de marca.
                </p>
              </li>
              <li className='group relative flex flex-col pb-8 pl-7 last:pb-0'>
                <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-700'></div>
                <p className='order-first font-semibold text-jade-200'>
                  Trackglobe S.L. (Grupo Barrabés)
                </p>
                <p className='mt-2 text-sm/4 text-jade-500'>2019-2022</p>
                <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                  Agile Front-End Developer
                </h3>
                <p className='mt-0.5 text-sm/6 text-zinc-300'>
                  Empresa tecnológica dinámica, parte del Grupo Barrabés, líder
                  en ecommerce y consultoría de innovación, y del Grupo BTS, un
                  operador internacional de telecomunicaciones. En plena
                  expansión tanto nacional como internacional, Trackglobe
                  combina la experiencia en ecommerce de Barrabés con la
                  fortaleza en telecomunicaciones de BTS, posicionándose como un
                  referente en el sector tecnológico.
                </p>
              </li>
              <li className='group relative flex flex-col pb-8 pl-7 last:pb-0'>
                <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-700'></div>
                <p className='order-first font-semibold text-jade-200'>
                  Integra Tecnología
                </p>
                <p className='mt-2 text-sm/4 text-jade-500'>2017-2019</p>
                <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                  .NET FullStack Developer
                </h3>
                <p className='mt-0.5 text-sm/6 text-zinc-300'>
                  Consultora tecnológica de prestigio, con un enfoque
                  especializado en la transformación digital y soluciones
                  tecnológicas innovadoras. Fundada en 1986 en Aragón, Integra
                  ha evolucionado desde sus raíces en formación e informática
                  hasta convertirse en un líder en el sector tecnológico a nivel
                  nacional. Su trayectoria está marcada por el desarrollo de
                  proyectos transversales, la obtención de las máximas
                  certificaciones técnicas y la formación de alianzas
                  estratégicas que subrayan su compromiso con la innovación
                  continua.
                </p>
              </li>
              <li className='group relative flex flex-col pb-8 pl-7 last:pb-0'>
                <div className='absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/30 group-first:top-3'></div>
                <div className='absolute left-0 top-2 h-2 w-2 rounded-full border border-jade-300 bg-jade-700'></div>
                <p className='order-first font-semibold text-jade-200'>
                  Hipercor S.A. (Grupo El Corte Inglés)
                </p>
                <p className='mt-2 text-sm/4 text-jade-500'>2013-2014</p>
                <h3 className='mt-2 text-sm/6 font-semibold text-white'>
                  Técnico en prácticas, mantenimiento sist. hardware
                </h3>
                <p className='mt-0.5 text-sm/6 text-zinc-300'>
                  Parte de la reconocida cadena de supermercados del grupo El
                  Corte Inglés, HiperCor se destaca por su amplia gama de
                  productos de alta calidad en alimentación, moda, electrónica y
                  hogar. En mi rol como técnico en prácticas, adquirí
                  experiencia clave en mantenimiento y reparación de hardware.
                  Esta etapa me brindó habilidades fundamentales en solución de
                  problemas y soporte técnico esenciales para mi desarrollo
                  profesional.
                </p>
              </li>
            </ul>
            <div className='w-full flex justify-center md:flex-col md:items-end mt-12'>
              <a
                href='https://docs.google.com/document/d/119rL87biQUfklitcP0fOVYvQFW94zezUSvZMLK5W89Q/export?format=pdf'
                className='text-white bg-jade-700 hover:bg-jade-800 focus:ring-1 focus:ring-jade-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
