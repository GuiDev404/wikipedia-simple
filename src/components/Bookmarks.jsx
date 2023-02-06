import { useEffect, useState } from 'react'
import { useBookmarkStore } from '../hooks/useBookmarkStore'
import useClickOutside from '../hooks/useClickOutside'
import { slugify, clean } from '../utils/sanitizeStr'
import ArticleSmallPreview from './ArticleSmallPreview'

import Button from './Button'
import { BookmarksIcon } from './Icons'
import InputSearch from './InputSearch'
import SaveButton from './SaveButton'

const Bookmarks = ({ noFloat = false } = {}) => {
  const { isOutside, ref, toggle } = useClickOutside({ includesAnchor: true })
  const bookmarks = useBookmarkStore(state => state.bookmarks)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => setSearch(e.target.value)

  useEffect(() => {
    if (isOutside) {
      setSearch('')
    }
  }, [isOutside])

  const filteredBookmarks = search
    ? [...bookmarks].filter(({ title }) => {
        const clearTitle = clean(slugify(title, '_', ' '))

        return clearTitle.includes(search)
      })
    : bookmarks

  const floatDisplay = !isOutside ? 'hidden' : 'initial'
  const floatClasses = !noFloat
    ? `${floatDisplay} top-full right-0 absolute w-96 bg-white shadow-md mt-2 rounded-md p-4 border border-gray-200 z-10`
    : 'w-full'

  const noBookmarks = bookmarks.length === 0

  return (
    <div className='relative' ref={ref}>
      {!noFloat && (
        <Button
          className='py-[.2rem] px-4 bg-transparent focus:bg-gray-100 bg-neutral-50 hover:bg-gray-100 shadow-sm hover:text-gray-800 font-semibold  text-gray-900'
          onClick={toggle}
        >
          <BookmarksIcon />
          Marcadores
        </Button>
      )}

      <div className={`${floatClasses}`}>
        <InputSearch
          placeholder='Buscar marcador'
          onChange={handleSearch}
          value={search}
          className='text-sm disabled:cursor-not-allowed disabled:opacity-80'
          disabled={noBookmarks}
          title={noBookmarks ? 'Guarde algo para buscar' : 'Buscar marcador'}
        />

        <div className={`mt-4 flex flex-col items-start gap-3 ${!noFloat ? 'h-60 overflow-y-auto' : ''}`}>
          {(noBookmarks) &&
            <small> No has guardado ninguna pagina </small>}

          {(filteredBookmarks.length === 0 && search) &&
            <small> No hay resultados </small>}

          {filteredBookmarks.map(page => (
            <div
              key={page.pageid}
              className='flex justify-between items-center gap-3 rounded-md w-full px-3 py-1 border-gray-200'
            >
              <ArticleSmallPreview
                className='border border-none px-0 py-0'
                title={slugify(page.title, '_', ' ')}
                description={page?.description}
                linkPreview={`/article/${slugify(page.title, ' ', '_')}`}
                titleFontSize='text-sm'
              />

              {/* <div className='text-left'>
                <h1 className='text-sm font-bold'>
                  <Link to={`/article/${slugify(page.title, ' ', '_')}`}>
                    {slugify(page.title, '_', ' ')}
                  </Link>
                </h1>

                <p className='text-sm text-gray-700 ellipsis ellipsis-1'> {page?.description} </p>
              </div> */}

              <div>
                <SaveButton page={page} />
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Bookmarks
