import React from 'react'
import { Link } from 'react-router-dom'
import Anchor from './Anchor'

const ListOfLinks = ({ links, isAnchor = false, className } = {}) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {links.map((link) => {
        const { url, label, ...restOfLink } = link
        return isAnchor
          ? (
            <Anchor key={label} url={url} {...restOfLink}>
              {label}
            </Anchor>
            )
          : (
            <Link to={url} key={label || link.key} {...restOfLink}> {label} </Link>
            )
      })}
    </div>
  )
}

export default ListOfLinks
