import { Link, useParams } from 'react-router-dom'
import { useRecommendationLinks, useSingleSummary } from '../hooks/useSingle'

import Container from '../components/Container'
import Button from '../components/Button'
import { ExternalLinkIcon } from '../components/Icons'

const Single = () => {
  const { keyword } = useParams()
  const { data: page_summary, isLoading: loading_summary, error: error_summary } = useSingleSummary(keyword)
  const { data: recommended_links, isLoading: recommended_loading, error: error_recommended } = useRecommendationLinks(keyword)

  // ver si hay un error 404 y redirigir a la pagina con Navigate de router dom
  if (error_summary || error_recommended) {
    return <p> {(error_summary || error_recommended)?.message ?? 'Error'} </p>
  }

  return (
    <>
      <Container styles='py-4 min-h-[87vh] -z-100'>
        <header className=''>
          <h1
            className={`${
              loading_summary
                ? 'animate-pulse h-10 w-3/4 bg-neutral-200 shadow-sm rounded-md'
                : 'text-4xl font-bold flex'
            }`}
          >
            {page_summary?.title}
            {!loading_summary && <Button
              styles='self-top h-min w-fit bg-transparent px-2 py-1 hover:text-blue-600'
              isLink
              external
              title='Leer articulo completo en Wikipedia'
              url={`https://es.wikipedia.org/wiki/${keyword}`}
              leftIcon={<ExternalLinkIcon width='16' />}
                                 />}
          </h1>

          <p className={loading_summary ? 'animate-pulse h-5 w-3/12 bg-neutral-200 shadow-sm rounded-md mt-3' : 'text-sm text-gray-600 mt-2'}> {page_summary?.description} </p>
        </header>

        <main className='mt-4 grid grid-cols-4 gap-5'>
          <div className='col-span-3'>
            {loading_summary
              ? (
                <>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='h-5 bg-neutral-200 rounded my-2 shadow-sm animate-pulse col-span-2' />
                    <div className='h-5 bg-neutral-200 rounded my-2 shadow-sm animate-pulse col-span-1' />
                  </div>
                  <div className='h-5 bg-neutral-200 rounded my-2 shadow-sm animate-pulse' />
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='h-5 bg-neutral-200 rounded my-2 shadow-sm animate-pulse col-span-1' />
                    <div className='h-5 bg-neutral-200 rounded my-2 shadow-sm animate-pulse col-span-2' />
                  </div>
                </>
                )
              : (
                <>
                  <p> {page_summary?.extract} </p>
                </>
                )}

            <div className='mt-6'>

              {(!recommended_loading && recommended_links?.pages?.length > 0) && <h2 className='text-lg font-semibold'> Articulos recomendados: </h2>}
              <div className='flex gap-x-5 gap-y-1 flex-wrap'>
                {recommended_links?.pages?.slice(0, 7).map((page, idx) => {
                  const { pageid, normalizedtitle, title } = page

                  return (
                    <Link
                      key={pageid ?? idx}
                      className={recommended_loading
                        ? 'h-6 rounded-md w-28 bg-neutral-200 animate-pulse'
                        : 'self-top h-min w-fit  text-sm hover:text-blue-600 hover:underline rounded-md  capitalize py-1'}
                      to={`/article/${title}`}
                    >
                      {normalizedtitle}
                    </Link>
                  )
                })}
              </div>
            </div>

          </div>

          <div className='span-4'>
            {(page_summary?.thumbnail?.source ?? page_summary?.originalimage?.source) && (
              <img
                src={page_summary?.thumbnail?.source ?? page_summary?.originalimage?.source}
                alt={page_summary?.title}
                className='rounded-md'
              />
            )}
          </div>
        </main>
      </Container>
    </>
  )
}

export default Single
