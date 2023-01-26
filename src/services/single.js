import { ENDPOINT, fetcher } from './config_api'

export function getSummaryPage (keys) {
  return fetcher({ endpoint: ENDPOINT.page(keys[1]) })
}

export function getRecommendationLinks ([_, query]) {
  return fetcher({
    url: `https://es.wikipedia.org/api/rest_v1/page/related/${query}`
    // url: `https://api.wikimedia.org/service/linkrecommendation/v1/linkrecommendations/wikipedia/es/${query}?max_recommendations=5`
  })
}
