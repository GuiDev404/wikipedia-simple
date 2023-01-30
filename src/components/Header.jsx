import React from 'react'

const Header = ({ title, subtitle, children, className }) => {
  return (
    <div className={`text-center flex flex-col items-center justify-center text-zinc-900 min-h-[90vh] ${className}`}>
      <div>
        <h1 className='md:text-6xl md:leading-[1.5] text-4xl leading-[1.5] font-extrabold mb-3'>
          {title}
        </h1>
        <p className='text-[1.4rem] text-zinc-700 w-[70%] mx-auto'> {subtitle} </p>
      </div>

      {children}
    </div>
  )
}

export default Header
