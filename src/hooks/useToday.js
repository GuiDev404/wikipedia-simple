// import useSWR from 'swr'
import useSWRInmutable from 'swr/immutable'
import { getRelated } from '../services/getRelated'
import { getTodayDate } from '../utils/getTodayDate'

// const FIVE_MINUTES = (1000 * 60) * 5

const useRelated = () => {
  // HACEN LO MISMO, Y HACE FETCH SOLO UNA VEZ Y USA LA CACHE, EN ESTE CASO NO CREO QUE LAS TENDENCIAS CAMBIEN TANTO COMO POR EJEMPLO EN TWITTER, EN ESE CASO USO EL NORMAL Y LO DEJO POR DEFECTO O USO UN LA PROPIEDAD refreshInterval

  // return useSWR(`/date/${getTodayDate()}`, getRelated, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,

  //   // HACE UNA REVALIDACION CADA 5 MINUTOS
  //   refreshInterval: FIVE_MINUTES
  // })

  return useSWRInmutable(`/date/${getTodayDate()}`, getRelated)
}

export default useRelated
