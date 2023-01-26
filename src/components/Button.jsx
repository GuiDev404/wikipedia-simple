import React from 'react'

const Button = ({ isLink, type = 'button', text, children, leftIcon, rightIcon, styles, external, ...props } = {}) => {
  return isLink
    ? (
      <a href={props?.url} title={props.title} target={external ? '_blank' : '_self'} rel='noreferrer' className={`outline-blue-600 border border-transparent rounded-md bg-zinc-100 h-full flex items-center gap-4 ${styles}`} {...props}>
        {leftIcon}
        {text}
        {rightIcon}
      </a>
      )
    : (
      <button type={type} className={`outline-blue-600 border border-transparent rounded-md bg-zinc-100 h-full flex items-center gap-4 ${styles}`} {...props}>
        {leftIcon}
        {text}
        {rightIcon}
      </button>
      )
}

export default Button
