import React from 'react'
import { Link } from 'react-router-dom'
import useToday from '../hooks/useToday'

import SaveButton from './SaveButton'

const orderAsc = (a, b) => a.rank - b.rank

const TrendingList = ({ trendings }) => {
  return (
    <>
      {trendings && trendings?.length > 0
        ? trendings.sort(orderAsc)?.map((item, idx) => <TrendingItem key={item.pageid} idx={idx} item={item} />)
        : <p className='text-lg text-gray-500'> No hay una tendencia aun.  </p>}
    </>
  )
}

const TrendingItem = ({ item, idx }) => {
  return (
    <div
      className='bg-white hover:shadow-sm pb-4 rounded-md border border-gray-200 overflow-hidden'
    >
      {idx === 0 && (item?.originalimage?.source || item?.thumbnail?.source)
        ? (
          <figure className=' w-full h-80 overflow-hidden'>
            <Link to={`/article/${item.title}`}>
              <img
                loading='lazy'
                src={
            item?.originalimage?.source ??
            item?.thumbnail?.source
          }
                alt={item.normalizedtitle}
                className='object-cover w-full h-full'
              />
            </Link>
          </figure>
          )
        : null}

      <div className='pt-4 px-4'>
        <header className='flex items-center gap-3'>
          {(idx !== 0 && (item.thumbnail || item.originalimage)) &&
            <img src={item.thumbnail.source ?? item.originalimage.source} className='object-cover w-9 h-9 rounded-md' />}
          <div>
            <Link to={`/article/${item.title}`}>
              <h1 className='text-2xl font-bold'>
                {' '}
                {item.normalizedtitle}{' '}
              </h1>
            </Link>
            <p className='text-sm text-gray-700'> {item?.description} </p>
          </div>
        </header>

        <p className='mt-5 ellipsis ellipsis-3'> {item.extract} </p>

        <footer className='flex items-end justify-between mt-4 mb-0'>
          <div className='text-xs text-gray-500'>
            Se editó por última vez el {new Date(item.timestamp).toLocaleDateString()}
          </div>
          <div className='flex gap-1'>

            <SaveButton
              page={item}
            />
          </div>
        </footer>
      </div>

    </div>
  )
}

const Trending = () => {
  const { data, error, isLoading } = useToday()

  if (error) return <p> {error?.message ?? 'Error'} </p>

  return (
    <section className='p-2 order-[-1] md:order-1 sm:col-span-2 h-fit sm:h-0 md:h-fit'>
      <h2 className='text-2xl font-bold'> Tendencias del dia </h2>
      <div className='flex flex-col gap-5 my-5'>
        {isLoading
          ? (
            <div>
              <div className='h-80 w-full rounded-md animate-pulse bg-neutral-200 shadow-sm'>  </div>
              <div className='mt-2 h-6 w-32 rounded-md animate-pulse bg-neutral-200 shadow-sm'> </div>
              <div className='mt-4 h-16 w-full rounded-md animate-pulse bg-neutral-200 shadow-sm'> </div>
            </div>
            )
          : (
            <TrendingList trendings={data?.mostread?.articles} />
            )}
      </div>
    </section>
  )
}

export default Trending
