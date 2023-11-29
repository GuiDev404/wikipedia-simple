import { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import useDebounce from '../hooks/useDebounce'
import useSearch from '../hooks/useSearch'

import { SpinIcon } from './Icons'
import InputSearch from './InputSearch'
import SearchResult from './SearchResult'

const Search = ({ noFloat = false } = {}) => {
  const { isOutside: showResult, ref, forceToggle } = useClickOutside({
    includesAnchor: true
  })

  const [search, setSearch] = useState('')
  const value = useDebounce(search)

  const { data, error, isLoading } = useSearch(value)

  let showSearchResults = 'initial'
  if (!noFloat) {
    showSearchResults = showResult ? 'initial' : 'hidden'
  }

  const overflowLoading = isLoading ? 'overflow-hidden' : 'overflow-y-auto'

  return (
    <>
      {!noFloat && <section
        className={`fixed left-0 bottom-0 w-full bg-[rgb(0,0,0,.5)] h-full z-10 ${showSearchResults}`}
                   />}

      <div className={`relative  z-50 ${!noFloat ? 'w-3/4' : 'w-[100%]'}`} ref={ref}>

        <InputSearch
          containerclassname='bg-white'
          onFocus={() => forceToggle(true)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Buscar en Wikipedia'
          className='text-sm sm:text-base relative rounded-md'
        />

        <section
          className={!noFloat ? `h-auto max-h-72 ${showSearchResults} absolute left-0 top-[100%] w-[98%] mx-[.5rem] bg-white p-4 shadow-md rounded-b-md ${overflowLoading}` : `my-5 ${overflowLoading}`}
        >
          <header className=''>
            <p className={`text-gray-700 text-sm ${!noFloat ? 'mb-2 -mt-2' : ''}`}> {value ? <> Resultados para <strong> {value} </strong> </> : 'No has buscado nada. Ultimos resultados: '} </p>
            {(value && data && data?.query?.pages === undefined) && <p className='text-sm mt-2'> No hay resultados </p>}
          </header>

          {isLoading && (
            <div className='top-0 left-0 h-full w-full flex justify-center items-center absolute z-10 bg-white opacity-70'>
              <SpinIcon className='animate-spin -ml-1 mr-3 h-8 w-8 text-black' />
            </div>
          )}

          <main>
            {error && <span> {error?.message ?? 'Error'} </span>}

            <SearchResult
              pages={data?.query?.pages}
            />

          </main>
        </section>
      </div>
    </>
  )
}

export default Search
