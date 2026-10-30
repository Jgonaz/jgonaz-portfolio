import { ViewTransition } from 'react'

// Transición entre la home y el CV. Solo anima las navegaciones etiquetadas con
// `transitionTypes` en el Link (nav-forward / nav-back); el resto cambia sin animar
export default function PageTransition ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransition
      enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      default='none'
    >
      {/* Un único contenedor: si no, React captura cada sección por separado y se ven huecos en la animación */}
      <div>{children}</div>
    </ViewTransition>
  )
}
