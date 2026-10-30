const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
} as const

export function ArrowLeftIcon () {
  return (
    <svg {...iconProps}>
      <path d='M19 12H5' />
      <path d='M12 19l-7-7 7-7' />
    </svg>
  )
}

export function DownloadIcon () {
  return (
    <svg {...iconProps}>
      <path d='M12 3v12' />
      <path d='M7 10l5 5 5-5' />
      <path d='M5 21h14' />
    </svg>
  )
}

export function PrinterIcon () {
  return (
    <svg {...iconProps}>
      <path d='M6 9V3h12v6' />
      <rect x='3' y='9' width='18' height='8' rx='2' />
      <path d='M6 14h12v7H6z' />
    </svg>
  )
}
