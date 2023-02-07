import useSWR from 'swr'
import { SEARCH } from '../services/config_api'

const useSearch = (query) => {
  const keyURL = Boolean(query.trim()) ? SEARCH({ query }) : null

  return useSWR(keyURL, {
    keepPreviousData: true,
    revalidateOnFocus: false
  })
}

export default useSearch
