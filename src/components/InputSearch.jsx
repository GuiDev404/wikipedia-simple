import React, { useId } from 'react'
import { SearchIcon } from './Icons'

const InputSearch = ({ className, onChange, search, isDisabled = false, ...props } = {}) => {
  const id = useId()

  return (
    <div className={`h-full flex justify-between items-center border border-neutral-200 rounded-md px-4 py-2 ${props?.containerclassname ?? ''}`}>
      <input
        type='search'
        autoComplete='no'
        onChange={onChange}
        value={search}
        className={`text-black bg-transparent outline-none w-full mr-2 ${className}`}
        disabled={isDisabled}
        id={`search-${id}`}
        {...props}
      />
      <label htmlFor={`search-${id}`}>
        <SearchIcon width='16' height='16' />
      </label>
    </div>
  )
}

export default InputSearch
