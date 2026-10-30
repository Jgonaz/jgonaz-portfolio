'use client'

import { PrinterIcon } from '@/app/[lang]/_components/cv/CvIcons'

// Imprime la página con los estilos @media print, los mismos que generan el PDF descargable
export default function PrintButton ({ label }: { label: string }) {
  return (
    <button type='button' className='cv-print' onClick={() => window.print()}>
      <PrinterIcon />
      {label}
    </button>
  )
}
