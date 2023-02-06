import React from 'react'
import Button from '../../Button'
import { MenuIcon } from '../../Icons'
import { useDrawer } from '../hooks/useDrawer'

const ToggleMenu = ({ className = '' } = {}) => {
  const { toggle } = useDrawer()

  return (
    <Button className={`${className}`} onClick={toggle}>
      <MenuIcon width='24px' height='24px' />
    </Button>
  )
}

export default ToggleMenu
