interface InstagramIconProps {
  className?: string
  fill?: string
  stroke?: string
  height?: string
  width?: string
}

const InstagramIcon: React.FC<InstagramIconProps> = ({
  className,
  fill,
  stroke,
  height = '22',
  width = '22'
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 256 256'
      xmlSpace='preserve'
      style={{ transform: 'scale(1.05)' }}
    >
      <defs></defs>
      <g transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
        <path
          d='M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 70 55.399 C 70 63.463 63.463 70 55.399 70 H 34.601 C 26.537 70 20 63.463 20 55.399 V 34.601 C 20 26.537 26.537 20 34.601 20 h 20.798 C 63.463 20 70 26.537 70 34.601 V 55.399 z'
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
        <circle
          cx='45.150999999999996'
          cy='45.150999999999996'
          r='13.081'
          transform='  matrix(1 0 0 1 0 0) '
        />
        <circle
          cx='60.980000000000004'
          cy='29.32'
          r='2.95'
          transform='  matrix(1 0 0 1 0 0) '
        />
      </g>
    </svg>
  )
}

export default InstagramIcon
