import React, { useCallback, useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import useDebounce from '../hooks/useDebounce'
import useSearch from '../hooks/useSearch'
import { SpinIcon } from './Icons'
import SearchResult from './SearchResult'

const Search = () => {
  const { isOutside: showResult, ref, forceToggle } = useClickOutside({ includesAnchor: true })

  const [search, setSearch] = useState('')
  const value = useDebounce(search)

  const { data, error, isLoading } = useSearch(value)

  return (
    <>
      <section
        className={`fixed left-0 bottom-0 w-full bg-[rgb(0,0,0,.5)] h-full z-0 ${
          showResult ? 'initial' : 'hidden'
        }`}
      />

      <div className='relative w-[80%]' ref={ref}>
        <input
          onFocus={() => forceToggle(true)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type='search'
          placeholder='Buscar en Wikipedia'
          className='w-full h-full rounded-md border border-zinc-300 outline-blue-600 px-4 z-10 relative'
        />

        <section
          id='search-result'
          className={`h-auto max-h-72 ${
          showResult ? 'initial' : 'hidden'
        } absolute left-0 top-full w-[98%] mx-[.5rem] bg-white p-4 shadow-md rounded-b-md ${isLoading ? 'overflow-hidden' : 'overflow-y-auto'} z-10`}
        >
          <header className='z-50'>
            <p className='text-gray-700 text-sm mb-2 -mt-2'> {value ? <> Resultados para <strong> {value} </strong> </> : 'No has buscado nada. Ultimos resultados: '} </p>
            {(value && data && data?.query?.pages === undefined) && <p className='text-sm mt-2'> No hay resultados </p>}
          </header>

          {isLoading && (
            <div className='top-0 left-0 h-full w-full flex justify-center items-center absolute z-10 bg-white opacity-70'>
              <SpinIcon className='animate-spin -ml-1 mr-3 h-8 w-8 text-black' />
            </div>
          )}

          <main>
            {error && <span> {error?.message ?? 'Error'} </span>}

            {/* <SearchResult
            pages={data?.query?.pages}
            handleHideResult={handleHideResult}
          /> */}

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
