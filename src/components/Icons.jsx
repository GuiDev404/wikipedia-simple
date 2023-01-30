
export const SearchIcon = (props) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='10' cy='10' r='7' />
      <line x1='21' y1='21' x2='15' y2='15' />
    </svg>
  )
}

export const ReadIcon = (props) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13' />
    </svg>
  )
}

export const SavedIcon = ({ fillPath = 'none', ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3-5 3V6a2 2 0 0 1 2-2' fill={fillPath} />
    </svg>
  )
}

export const BookmarksIcon = ({ fillPath = 'none', ...props }) => {
  return (
    <svg
      width={20}
      height={20}
      strokeWidth={2}
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M13 7a2 2 0 0 1 2 2v12l-5-3-5 3V9a2 2 0 0 1 2-2h6z' />
      <path d='M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v12l-1-.6' />
    </svg>
  )
}

export const ExternalLinkIcon = (props) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox='0 0 24 24'
      strokeWidth={1.7}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M10 14 20 4M15 4h5v5' />
    </svg>
  )
}

export const SpinIcon = props => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle
        className='opacity-25'
        cx={12}
        cy={12}
        r={10}
        stroke='currentColor'
        strokeWidth={4}
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}

export const CalendarIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M18 14v4h4' />
      <circle cx={18} cy={18} r={4} />
      <path d='M15 3v4M7 3v4M3 11h16' />
    </svg>
  )
}

export const MenuIcon = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M4 6h16M4 12h16M4 18h16' />
    </svg>
  )
}
