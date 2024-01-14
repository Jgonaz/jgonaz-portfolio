interface WorkIconProps {
  className?: string
}

const WorkIcon: React.FC<WorkIconProps> = ({ className }) => {
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

export default WorkIcon
