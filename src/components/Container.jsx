import React from 'react'

const Container = ({ children, styles }) => {
  return <div className={`mx-auto max-w-[1000px] w-[90%] ${styles}`}>{children}</div>
}

export default Container
