import React from 'react'
import useToday from '../hooks/useToday'
import RandomArticle from './RandomArticle'

const ImageOfDay = () => {
  const { data, error, isLoading } = useToday()

  if (error) return <p> {error?.message ?? 'Error'} </p>

  // md:row-start-1 md:col-start-3 md:col-end-4 md:order-2 lg:col-start-4 lg:col-end-5

  return (
    <aside className='p-2  order-1 md:order-1 sm:col-start-3 md:col-start-4'>
      <h2 className='text-2xl font-bold '> Imagen del dia </h2>

      {isLoading
        ? (
            'Loading...'
          )
        : (
          <>

            <figure className='my-5'>
              <a
                href={data.image.file_page}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  loading='lazy'
                  className='rounded-md'
                  src={data?.image?.image?.source ?? data?.image?.thumbnail?.source}
                  alt={data.image.description.text}
                  title={data.image.title}
                />
              </a>
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
