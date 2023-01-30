
import useClickOutside from '../hooks/useClickOutside'
import Button from './Button'
import { MenuIcon } from './Icons'

export const DrawerHeader = ({ children }) => {
  <header className='flex justify-between items-center'>
    <Button className='h-fit' type='button' onClick={() => null}>
      <MenuIcon width='25px' height='25px' />
    </Button>
    {children}
  </header>
}

const Drawer = ({ width, children, className }) => {
  const { isOutside, toggle, ref } = useClickOutside({ includesAnchor: true })

  const icon = <MenuIcon width='25px' height='25px' />

  return (
    <>
      <Button type='button' className='w-10 justify-center sm:hidden' onClick={toggle}>
        {icon}
      </Button>

      <div
        className={`${!isOutside ? 'hidden' : ''} sm:hidden bg-neutral-900 left-0 top-0 h-full z-40 w-full bg-opacity-60 fixed `}
      >
        <div ref={ref} className='absolute bg-white h-full w-10/12 sm:w-[400px]'>

          {children}
        </div>
      </div>

    </>
  )
}

export default Drawer
