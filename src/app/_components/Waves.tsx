import '@/app/_styles/waves.css'

interface WavesProps {
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  background?: string
}

export default function Waves ({
  background,
  color1,
  color2,
  color3,
  color4
}: WavesProps) {
  return (
    <div className='waves' style={{ backgroundColor: background }}>
      <div className='first-waves z-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              className='color1'
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill={color1}
            />
            <use
              className='color2'
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill={color2}
            />
          </g>
        </svg>
      </div>
      <div className='second-waves z-30'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              className='color3'
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill={color3}
            />
            <use
              className='color4'
              xlinkHref='#gentle-wave'
              x='48'
              y='7'
              fill={color4}
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
