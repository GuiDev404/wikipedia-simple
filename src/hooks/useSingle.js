import useSWR from 'swr'
import { getSummaryPage, getRecommendationLinks } from '../services/single'

export const useSingleSummary = (title_page) => {
  return useSWR(['page', title_page], getSummaryPage, {
    revalidateOnFocus: false
  })
}

export const useRecommendationLinks = (title_page) => {
  return useSWR(['recommended_links', title_page], getRecommendationLinks, {
    revalidateOnFocus: false,
    fallbackData: {
      pages: [...Array(7).keys()]
    }
  })
}
