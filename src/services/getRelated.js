import { ENDPOINT, fetcher } from './config_api'

export function getRelated () {
  return fetcher({ endpoint: ENDPOINT.today_data() })
}
