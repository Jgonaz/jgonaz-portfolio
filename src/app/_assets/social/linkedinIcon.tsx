interface LinkedinIconProps {
  className?: string
  fill?: string
  stroke?: string
  height?: string
  width?: string
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({
  className,
  fill,
  stroke,
  height = '22',
  width = '22'
}) => {
  return (
    <svg
      className={className}
      enableBackground='new 0 0 48 48'
      version='1.1'
      width={width}
      height={height}
      viewBox='0 0 48 48'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <circle cx='24' cy='24' fill={fill} r='24'></circle>
      <path
        d='M17.4,34.9h-4.6V20.1h4.6V34.9z M14.9,18.2L14.9,18.2c-1.7,0-2.8-1.1-2.8-2.6c0-1.5,1.1-2.6,2.8-2.6  c1.7,0,2.8,1.1,2.8,2.6C17.7,17.1,16.7,18.2,14.9,18.2z M35.9,34.9h-5.3v-7.7c0-2-0.8-3.4-2.6-3.4c-1.4,0-2.1,0.9-2.5,1.8  c-0.1,0.3-0.1,0.8-0.1,1.2v8h-5.2c0,0,0.1-13.6,0-14.8h5.2v2.3c0.3-1,2-2.5,4.6-2.5c3.3,0,5.9,2.1,5.9,6.7V34.9z'
        fill={stroke}
      ></path>
    </svg>
  )
}

export default LinkedinIcon