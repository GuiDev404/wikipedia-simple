import { Link } from 'react-router-dom'
import logo from '../assets/wikipedia_logo.png'

import Search from './Search'
import Bookmarks from './Bookmarks'
import Drawer from './Drawer'
import useToggle from '../hooks/useToggle'

const Navbar = () => {
  const anchorLogo = (
    <Link
      to='/'
      className='hover:scale-110 transition-transform ease-in duration-100'
    >
      <img src={logo} width='35' alt='Logo de Wikipedia' />
    </Link>
  )

  const navContent = (
    <>
      <div className='flex justify-center items-center'>
        {anchorLogo}
      </div>

      <div className='flex-grow flex justify-center '>
        <Search />
      </div>

      <div className='flex gap-1'>
        <Bookmarks />
      </div>
    </>
  )

  return (
    <>
      <div className='h-[75px] p-4 bg-white border border-b-slate-200 shadow-md'>
        <div className='hidden sm:flex justify-between items-stretch '>
          {navContent}
        </div>

        <Drawer width={300}>
          <div className='flex flex-col'>
            {navContent}
          </div>
        </Drawer>
      </div>

    </>
  )
}

export default Navbar
