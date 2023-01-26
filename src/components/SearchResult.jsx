import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { ExternalLinkIcon } from './Icons'
import SaveButton from './SaveButton'
import logo from '../assets/wikipedia_logo.png'

const SearchResult = ({ pages, handleHideResult }) => {
  return (
    Object.values(pages ?? [])?.map((page) => (
      <div
        className='flex items-start justify-between mb-3 p-2 rounded-md gap-4 group'
        key={page.pageid}
      >
        <div className='w-10 h-10 rounded-md overflow-hidden bg-gray-100'>
          <img
            loading='lazy'
            src={page?.thumbnail?.source ?? logo}
            className='w-10 h-10 rounded-md object-cover object-center'
            alt={page.title}
          />
        </div>

        <div className='flex flex-col flex-grow'>
          <h2 className='font-semibold -mt-1'>
            <Link
              to={`/article/${page.title.replaceAll(' ', '_')}`}
              // onClick={handleHideResult}
            >
              {page.title}
            </Link>
          </h2>
          <p className='text-neutral-700 text-sm truncate w-[400px]'> {page.description} </p>
        </div>

        <div className='self-center gap-2 hidden group-hover:flex'>
          <Button
            isLink
            external
            url={`https://es.wikipedia.org/?curid=${page.pageid}`}
            title={page.title}
            styles='w-8 h-8 flex justify-center items-center '
            leftIcon={<ExternalLinkIcon width={20} height={20} />}
          />

          <SaveButton
            page={page}
          />
        </div>
      </div>
    ))
  )
}

export default React.memo(SearchResult)
