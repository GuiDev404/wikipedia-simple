import useSWR from 'swr'
import { RANDOM_ARTICLE } from '../services/config_api'

const useRandom = () => {
  return useSWR(RANDOM_ARTICLE, {
    revalidateOnFocus: false,
    keepPreviousData: true
  })
}

export default useRandom
