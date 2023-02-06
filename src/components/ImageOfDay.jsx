import React from 'react'
import useToday from '../hooks/useToday'
import Anchor from './Anchor'
import RandomArticle from './RandomArticle'

const ImageOfDay = () => {
  const { data, error, isLoading } = useToday()

  if (error) return <p> {error?.message ?? 'Error'} </p>

  return (
    <aside className='p-2  order-1 md:order-1 sm:col-start-3 md:col-start-4'>
      <h2 className='text-2xl font-bold '> Imagen del dia </h2>

      {isLoading
        ? (
          <div>
            <div className='mt-5 h-36 w-full rounded-md animate-pulse bg-neutral-200 shadow-sm'>  </div>
            <div className='mt-2 h-4 w-32 rounded-md animate-pulse bg-neutral-200 shadow-sm'> </div>
            <div className='mt-2 h-16 w-full rounded-md animate-pulse bg-neutral-200 shadow-sm'> </div>
          </div>
          )
        : (
          <>

            <figure className='my-5'>
              <Anchor url={data.image.file_page} external>
                <img
                  loading='lazy'
                  className='rounded-md'
                  src={data?.image?.image?.source ?? data?.image?.thumbnail?.source}
                  alt={data.image.description.text}
                  title={data.image.title}
                />
              </Anchor>
              <figcaption className='mt-2'>
                <small className='text-[.7rem] font-semibold text-neutral-600 mb-2 inline-block'>
                  <i> Foto tomada por: </i>
                  {data.image.artist.text}
                </small>
                <p> {data.image.description.text}
                </p>
              </figcaption>
            </figure>

            <RandomArticle />
          </>
          )}
    </aside>
  )
}

export default ImageOfDay
