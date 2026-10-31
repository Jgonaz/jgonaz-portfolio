'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import '@/app/[lang]/_styles/smoothScroll.css'

// Inercia de la rueda: más bajo = más suave y más «flotante». 0.1 es suave sin sentirse lento
const WHEEL_LERP = 0.1

/**
 * Scroll suave con la rueda del ratón y el trackpad (Lenis) mientras está montado. El
 * scroll táctil sigue siendo nativo y, con movimiento reducido, no se suaviza nada.
 */
export default function SmoothScroll () {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: WHEEL_LERP, autoRaf: true })

    // Enlaces a anclas de la misma página (#work, #top…): Lenis no cancela el salto
    // nativo del navegador, así que se cancela aquí, se desliza con la misma curva que
    // la rueda y se actualiza la URL como lo haría el navegador
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
      ) return
      const link = (event.target as Element | null)?.closest?.('a[href]')
      if (!(link instanceof HTMLAnchorElement) || link.target === '_blank') return
      const url = new URL(link.href)
      const here = window.location
      if (url.origin !== here.origin || url.pathname !== here.pathname || !url.hash) return
      const target = url.hash === '#top' ? 0 : document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (target === null) return
      event.preventDefault()
      lenis.scrollTo(target)
      if (url.hash !== here.hash) window.history.pushState(window.history.state, '', url.href)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return null
}
