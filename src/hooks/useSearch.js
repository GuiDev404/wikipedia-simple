import useSWR from 'swr'
import { getSearch } from '../services/getSearch'

const useSearch = (keyword) => {
  return useSWR(Boolean(keyword.trim()) ? ['search/', keyword] : null, getSearch, {
    keepPreviousData: true,
    revalidateOnFocus: false
  })
}

export default useSearch
