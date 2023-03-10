import React from 'react'

const Button = ({
  type = 'button',
  children,
  className,
  proccesing = false,
  ...props
} = {}) => {
  return (
    <button
      type={type}
      disabled={proccesing}
      className={`outline-blue-600 border border-transparent rounded-md bg-zinc-100 h-full flex items-center gap-4 ${className}`}
      {...props}
    >
      {/* {proccesing && 'Loading...'} */}
      {children}
    </button>
  )
}

export default Button
