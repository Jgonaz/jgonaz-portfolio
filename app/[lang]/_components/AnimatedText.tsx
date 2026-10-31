'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import '@/app/[lang]/_styles/animatedText.css'

type Mode = 'letters' | 'fade'
type Phase = 'idle' | 'out' | 'in'

interface AnimatedTextProps {
  text?: string
  // `letters` para textos cortos y destacados; `fade` para párrafos y descripciones
  mode?: Mode
}

interface State {
  // Texto vigente (el de la prop) y texto que se está mostrando ahora
  target: string
  shown: string
  phase: Phase
  // Se incrementa en cada cambio de fase. El temporizador depende de él y no de `phase`:
  // si en un mismo render se pasa de `in` a `out` otra vez, `phase` no cambia entre
  // commits y el efecto no volvería a armarse, dejando el texto atascado
  step: number
}

const VARIANTS = ['rise', 'fall', 'flip', 'blur', 'spin'] as const
// Reparto aleatorio de retrasos entre letras («A destiempo» del prototipo)
const SPREAD_MS = 220
const LETTERS_OUT_MS = SPREAD_MS + 260
const LETTERS_IN_MS = SPREAD_MS + 380
const FADE_MS = 220
// Salvaguarda: más letras que esto serían demasiados nodos animados a la vez
const MAX_LETTERS_LENGTH = 120

// Hash determinista del prototipo: misma variante y retraso por letra en cada render
function hash (a: number, b: number) {
  let h = (a * 374761393 + b * 668265263) | 0
  h = (h ^ (h >>> 13)) * 1274126177
  h = h ^ (h >>> 16)
  return (h >>> 0) / 4294967295
}

function seedOf (text: string) {
  let seed = 7
  for (let i = 0; i < text.length; i++) seed = (seed * 31 + text.charCodeAt(i)) | 0
  return seed
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Solo se animan los textos en pantalla (con un margen): el resto cambia al instante, así
// no se animan cientos de letras que nadie ve
const VIEWPORT_MARGIN_PX = 100
const isOnScreen = (element: HTMLElement | null) => {
  if (!element) return false
  const { top, bottom, width, height } = element.getBoundingClientRect()
  // Un elemento oculto (display: none) mide 0×0 y no se ve aunque su posición caiga dentro
  if (width === 0 && height === 0) return false
  return bottom > -VIEWPORT_MARGIN_PX && top < window.innerHeight + VIEWPORT_MARGIN_PX
}

/**
 * Pinta `text` tal cual en reposo (sin dividirlo, así el SSR y la hidratación no
 * cambian y el DOM sigue ligero). Cuando `text` cambia tras el montaje, las letras del
 * texto anterior salen, se sustituye el texto y las del nuevo entran. Nunca anima en el
 * montaje inicial.
 */
export default function AnimatedText ({ text: textProp, mode = 'letters' }: AnimatedTextProps) {
  const text = textProp ?? ''
  // Envoltorio estable: permite saber si el texto está en pantalla al cambiar
  const ref = useRef<HTMLSpanElement>(null)
  const [state, setState] = useState<State>({ target: text, shown: text, phase: 'idle', step: 0 })

  // El texto cambió: se inicia (o redirige) la transición. Se hace durante el render, y
  // no en un efecto, para que no haya un fotograma intermedio con el texto antiguo ya en
  // reposo. Si ya está saliendo, solo se actualiza el destino; si está entrando, vuelve a
  // salir; así siempre termina en el último valor. Leer el DOM aquí es seguro: el ref
  // apunta al nodo del commit anterior y solo se consulta su posición.
  if (state.target !== text) {
    // eslint-disable-next-line react-hooks/refs -- lectura de posición, sin efectos
    if (prefersReducedMotion() || (state.phase === 'idle' && !isOnScreen(ref.current))) {
      setState({ target: text, shown: text, phase: 'idle', step: state.step + 1 })
    } else if (state.phase === 'out') {
      setState({ ...state, target: text })
    } else {
      setState({ target: text, shown: state.shown, phase: 'out', step: state.step + 1 })
    }
  }

  const effectiveMode: Mode =
    mode === 'letters' && Math.max(state.shown.length, state.target.length) <= MAX_LETTERS_LENGTH
      ? 'letters'
      : 'fade'

  useEffect(() => {
    if (state.phase === 'idle') return
    const leaving = state.phase === 'out'
    const duration =
      effectiveMode === 'fade' ? FADE_MS : leaving ? LETTERS_OUT_MS : LETTERS_IN_MS
    // Se limpia al cambiar de fase y al desmontar, así no quedan temporizadores sueltos
    const timer = window.setTimeout(() => {
      setState(current => {
        if (!leaving || current.shown === current.target) {
          return { ...current, phase: 'idle', step: current.step + 1 }
        }
        return { ...current, shown: current.target, phase: 'in', step: current.step + 1 }
      })
    }, duration)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `step` cubre los cambios de fase
  }, [state.step, effectiveMode])

  if (state.phase === 'idle') return <span ref={ref}>{state.shown}</span>

  // Los lectores de pantalla reciben siempre el texto vigente completo; lo que se anima
  // va oculto para ellos
  const fullText = <span className='animated-text-sr'>{state.target}</span>

  if (effectiveMode === 'fade') {
    return (
      <span ref={ref}>
        {fullText}
        <span
          aria-hidden='true'
          className={state.phase === 'out' ? 'animated-text-fade-out' : 'animated-text-fade-in'}
        >
          {state.shown}
        </span>
      </span>
    )
  }

  const seed = seedOf(state.target)
  let letterIndex = 0
  return (
    <span ref={ref}>
      {fullText}
      {state.shown.split(' ').map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          {wordIndex > 0 && ' '}
          <span className='animated-text-word' aria-hidden='true'>
            {Array.from(word).map(char => {
              const index = letterIndex++
              const variant =
                VARIANTS[Math.min(Math.floor(hash(seed + 97, index) * VARIANTS.length), VARIANTS.length - 1)]
              return (
                <span
                  key={index}
                  className={`animated-text-letter animated-text-${state.phase}-${variant}`}
                  style={{ animationDelay: `${Math.round(hash(seed, index) * SPREAD_MS)}ms` }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        </Fragment>
      ))}
    </span>
  )
}
