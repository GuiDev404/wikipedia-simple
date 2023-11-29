import React from 'react'
import Button from '../../Button'
import { useDrawer } from '../hooks/useDrawer'

const ToggleMenu = ({ className = '', children } = {}) => {
  const { toggle } = useDrawer()

  return (
    <Button className={`${className}`} onClick={toggle}>
      {children}
    </Button>
  )
}

export default ToggleMenu
