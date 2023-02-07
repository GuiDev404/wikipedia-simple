import useSWR from 'swr'
import { RELATED_ARTICLES, SUMMARY_ARTICLE } from '../services/config_api'

export const useSingleSummary = (title_page) => {
  return useSWR(SUMMARY_ARTICLE(title_page), {
    revalidateOnFocus: false
  })
}

export const useRecommendationLinks = (title_page) => {
  return useSWR(RELATED_ARTICLES(title_page), {
    revalidateOnFocus: false,
    fallbackData: {
      pages: [...Array(7).keys()]
    }
  })
}
