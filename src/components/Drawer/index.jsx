import { useLayoutEffect } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

import ToggleMenu from './components/ToggleMenu'
import { DrawerContext } from './context/DrawerContext'
import { MenuIcon } from '../Icons'

export * from './components/Content'
export * from './components/Footer'
export * from './components/Header'
export * from './hooks/useDrawer'

export default function Drawer ({ children, className = '', contentNoActive } = {}) {
  const { isOutside, toggle, ref } = useClickOutside({ includesAnchor: true })

  useLayoutEffect(() => {
    document.body.style.overflowY = isOutside ? 'hidden' : 'scroll'

    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOutside])

  return (
    <DrawerContext.Provider value={{ isOutside, toggle }}>
      {/* {!isOutside && ( */}
      <div className='flex items-center justify-between h-full sm:hidden'>
        {contentNoActive}
        <ToggleMenu className=' w-11 justify-center'>
          <MenuIcon width='24px' height='24px' />
        </ToggleMenu>
      </div>
      {/* )} */}
      <div
        className={`${!isOutside ? 'hidden' : ''} sm:hidden bg-neutral-900 left-0 top-0 h-full z-40 w-full bg-opacity-60 fixed ${className}`}
      >
        <div ref={ref} className='absolute bg-white h-full w-10/12 sm:w-[400px] overflow-y-auto'>
          {children}
        </div>
      </div>
    </DrawerContext.Provider>
  )
}
