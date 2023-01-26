import { ENDPOINT, fetcher } from './config_api'

export function getRandom () {
  return fetcher({ endpoint: ENDPOINT.random })
}
