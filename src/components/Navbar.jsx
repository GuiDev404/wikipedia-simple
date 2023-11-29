import { Link } from 'react-router-dom'
import logo from '../assets/wikipedia_logo.png'

import Search from './Search'
import Bookmarks from './Bookmarks'
import Drawer, { DrawerContent, DrawerHeader } from './Drawer'
import Tabs from './Tabs'
import ToggleMenu from './Drawer/components/ToggleMenu'
import { CloseIcon } from './Icons'

const tabs = [
  {
    id: 0,
    content: (
      <>
        <h2 className='mb-2 font-medium'>
          Buscar en Wikipedia
        </h2>
        <Search noFloat />
      </>
    ),
    label: 'Buscar articulo'
  },
  {
    id: 1,
    content: (
      <>
        <h2 className='mb-2 font-medium'>
          Buscar en Marcadores
        </h2>
        <Bookmarks noFloat />
      </>
    ),
    label: 'Marcadores'
  }
]

const Navbar = () => {
  const anchorToHome = (
    <Link to='/' className='font-bold flex flex-col'>
      <span> Wikipedia </span>
      <small className='text-xs text-neutral-400'> Enciclopedia libre </small>
    </Link>
  )

  return (
    <div className='h-[75px] p-4 bg-white border border-b-slate-200'>

      <div className='hidden sm:flex justify-between items-stretch '>
        <div className='flex justify-center items-center'>
          <Link
            to='/'
            className='hover:scale-110 transition-transform ease-in duration-100'
          >
            <img src={logo} width='35' alt='Logo de Wikipedia' />
          </Link>
        </div>
        <div className='flex-grow flex justify-center '>
          <Search />
        </div>
        <div className='flex gap-1'>
          <Bookmarks />
        </div>
      </div>

      <Drawer contentNoActive={anchorToHome}>
        <DrawerHeader className='p-4 h-[75px]'>
          {anchorToHome}
          <ToggleMenu className='self-stretch w-11 justify-center'>
            <CloseIcon width='24px' height='24px' />
          </ToggleMenu>
        </DrawerHeader>
        <DrawerContent>
          <Tabs
            classNameHeader='border border-bottom border-gray-200 px-4 py-2 flex items-center min-h-[75px] gap-y-2 gap-x-8'
            classNameContent='m-4'
            tabs={tabs}
          />
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default Navbar
