
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useBookmarkStore } from '../hooks/useBookmarkStore'
import useClickOutside from '../hooks/useClickOutside'
// import useStorage from '../hooks/useStorage'
// import { KEY_GUARDADOS } from '../utils/localStorage'

import Button from './Button'
import { BookmarksIcon, SearchIcon } from './Icons'
import SaveButton from './SaveButton'

const Bookmarks = () => {
  const { isOutside, ref, toggle } = useClickOutside({ includesAnchor: true })
  const bookmarks = useBookmarkStore(state => state.bookmarks)

  const [search, setSearch] = useState('')
  const handleSearch = (e) => setSearch(e.target.value)

  const filteredBookmarks = search
    ? [...bookmarks].filter(({ title }) => {
        const clearTitle = title.replaceAll('_', ' ').trim().toLowerCase()

        return clearTitle.includes(search)
      })
    : bookmarks

  useEffect(() => {
    if (isOutside) {
      setSearch('')
    }
  }, [isOutside])

  return (
    <div className='relative' ref={ref}>
      <Button
        styles='py-[.2rem] px-4 bg-transparent focus:bg-gray-100 hover:bg-gray-100 hover:text-gray-800 font-semibold  text-gray-900'
        text='Marcadores'
        leftIcon={<BookmarksIcon />}
        onClick={toggle}
      />

      {(isOutside) && (
        <div className='top-full right-0 absolute w-96 bg-white shadow-md mt-2 rounded-md p-4 border border-gray-200'>
          <div className='flex justify-between items-center border border-neutral-200 rounded-md px-4 py-2'>
            <input type='text' onChange={handleSearch} value={search} className='text-black w-full  outline-none text-sm mr-2' placeholder='Buscar marcador' disabled={bookmarks.length === 0} />
            <SearchIcon width='16' height='16' />
          </div>

          <div className='mt-4 flex flex-col items-start gap-3'>
            {(bookmarks.length === 0) &&
              <small> No has guardado ninguna pagina </small>}

            {(filteredBookmarks.length === 0 && search) &&
              <small> No hay resultados </small>}

            {filteredBookmarks.map(data => (
              <div className='flex justify-between items-center gap-3 rounded-md w-full px-3 py-1  border-gray-200' key={data.pageid}>

                <div className='text-left'>
                  <h1 className='text-sm font-bold'>
                    <Link to={`/article/${data.title.replaceAll(' ', '_')}`}>
                      {data.title.replaceAll('_', ' ')}
                    </Link>
                  </h1>

                  <p className='text-sm text-gray-700 ellipsis ellipsis-1'> {data?.description} </p>
                </div>

                <div>
                  <SaveButton page={data} />
                </div>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  )
}

export default Bookmarks
