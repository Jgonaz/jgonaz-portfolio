export const CVIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width='20'
    height='22'
    xmlns='http://www.w3.org/2000/svg'
    fill-rule='evenodd'
    clip-rule='evenodd'
  >
    <path d='M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z' />
  </svg>
)

export const EducationIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`icon icon-tabler icon-tabler-school ${className}`}
    width='20'
    height='20'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
    <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
  </svg>
)

export const InstagramIcon: React.FC<IconProps> = ({
  className,
  fill,
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

export const LinkedinIcon: React.FC<IconProps> = ({
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

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`icon icon-tabler icon-tabler-mail ${className}`}
    width='20'
    height='20'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
    <path d='M3 7l9 6l9 -6' />
  </svg>
)

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`icon icon-tabler icon-tabler-mail ${className}`}
    width='20'
    height='20'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
    <path d='M3 7l9 6l9 -6' />
  </svg>
)

export const UserIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-file-cv ${className}`}
      width='20'
      height='20'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' />
    </svg>
  )
}

export const WorkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-briefcase-2 ${className}`}
      width='20'
      height='20'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z' />
      <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
    </svg>
  )
}

export const LanguageIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-language ${className}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 5h7' />
      <path d='M9 3v2c0 4.418 -2.239 8 -5 8' />
      <path d='M5 9c0 2.144 2.952 3.908 6.7 4' />
      <path d='M12 20l4 -9l4 9' />
      <path d='M19.1 18h-6.2' />
    </svg>
  )
}
