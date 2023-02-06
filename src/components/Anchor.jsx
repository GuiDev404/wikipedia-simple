import React from 'react'

const Anchor = ({ children, url, title, external, className, ...props }) => {
  return (
    <a
      href={url}
      title={title}
      target={external ? '_blank' : '_self'}
      rel='noopener noreferrer'
      className={`outline-blue-600 border border-transparent rounded-md bg-zinc-100 h-full flex items-center gap-4 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export default React.memo(Anchor)
