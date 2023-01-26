import { Link } from 'react-router-dom'
import logo from '../assets/wikipedia_logo.png'

import Search from './Search'
import Bookmarks from './Bookmarks'

const Navbar = () => {
  return (
    <div className='flex justify-between items-stretch h-[75px] p-4 bg-white border border-b-slate-200 shadow-md'>
      <div className='flex justify-center items-center'>
        <Link
          to='/'
          className='hover:scale-110 transition-transform ease-in duration-100'
        >
          <img src={logo} width='40' alt='' />
        </Link>
      </div>

      <div className='flex-grow flex justify-center '>
        <Search />
      </div>

      <div className='flex gap-1'>
        <Bookmarks />
      </div>
    </div>
  )
}

export default Navbar
