import { getTodayDate } from '../utils/getTodayDate'

export const BASE_URL = 'https://es.wikipedia.org/api/rest_v1'
export const ALTERNATIVE_BASE_URL = 'https://es.wikipedia.org/w/api.php'

export function fetcher ({ url, endpoint }) {
  const URL = url || `${BASE_URL}/${endpoint}`

  return fetch(URL)
    .then(res => res.json())
}

export const ENDPOINT = {
  related: (title_page) => `page/related/${title_page}`,
  page: (title_page) => `page/summary/${title_page}`,
  today_data: () => {
    const today = getTodayDate()

    return `feed/featured/${today}`
  },
  random: 'page/random/summary',
  search: ({ keyword, limit = 25 } = {}) => `${ALTERNATIVE_BASE_URL}?action=query&format=json&generator=prefixsearch&prop=pageprops|pageimages|description&ppprop=displaytitle&piprop=thumbnail&pithumbsize=160&pilimit=${limit}&gpssearch=${keyword}&gpsnamespace=0&gpslimit=${limit}&origin=*`
}
