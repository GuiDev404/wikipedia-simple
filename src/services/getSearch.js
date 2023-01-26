import { ENDPOINT, fetcher } from './config_api'

export function getSearch (keys) {
  const [, keyword] = keys

  return fetcher({ url: ENDPOINT.search({ keyword }) })
}
