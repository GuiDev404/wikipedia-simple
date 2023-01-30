import { Navigate, useParams } from 'react-router-dom'
import { useRecommendationLinks, useSingleSummary } from '../hooks/useSingle'

import { ExternalLinkIcon } from '../components/Icons'
import Anchor from '../components/Anchor'
import ListOfLinks from '../components/ListOfLinks'

const Single = () => {
  const { keyword } = useParams()
  const {
    data: page_summary,
    isLoading: loading_summary,
    error: error_summary
  } = useSingleSummary(keyword)
  const {
    data: recommended_links,
    isLoading: recommended_loading,
    error: error_recommended
  } = useRecommendationLinks(keyword)

  if (error_summary || error_recommended) {
    return <p> {(error_summary || error_recommended)?.message ?? 'Error'} </p>
  }

  if (!loading_summary && page_summary?.title === 'Not found.') {
    return <Navigate to='/404' />
  }

  const RECOMMENDED_LINKS = recommended_links.pages.slice(0, 7).map((page, i) => ({
    key: page.pageid || i,
    label: page.normalizedtitle,
    url: `/article/${page.title}`,
    className: recommended_loading
      ? 'h-6 rounded-md w-28 bg-neutral-200 animate-pulse'
      : 'self-top h-min w-fit text-sm hover:text-blue-600 hover:underline rounded-md  capitalize py-1'
  }))

  return (
    <>
      <div className='mx-auto max-w-[1000px] w-[90%] py-4 min-h-[87vh] -z-100'>
        <header className=''>
          <h1
            className={`${
              loading_summary
                ? 'animate-pulse h-10 w-3/4 bg-neutral-200 shadow-sm rounded-md'
                : 'text-4xl font-bold flex'
            }`}
          >
            {page_summary?.title}

            {!loading_summary && (
              <Anchor
                className='self-top h-min w-fit bg-transparent px-2 py-1 hover:text-blue-600'
                external
                title='Leer articulo completo en Wikipedia'
                url={`https://es.wikipedia.org/wiki/${keyword}`}
              >
                <ExternalLinkIcon width='16' />
              </Anchor>
            )}
          </h1>

          <p
            className={
              loading_summary
                ? 'animate-pulse h-5 w-3/12 bg-neutral-200 shadow-sm rounded-md mt-3'
                : 'text-sm text-gray-600 mt-2'
            }
          >
            {page_summary?.description}
          </p>
        </header>

        <main className='mt-4 grid grid-cols-1 sm:grid-cols-4 gap-5'>

          <div className='col-span-1 order-2 sm:order-none sm:col-span-3'>
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
              : <p> {page_summary?.extract} </p>}

            <div className='mt-6'>
              {!recommended_loading && recommended_links?.pages?.length > 0 && (
                <h2 className='text-lg font-semibold'> Articulos recomendados: </h2>
              )}

              <ListOfLinks
                links={RECOMMENDED_LINKS}
                className='gap-x-5 gap-y-1'
              />

            </div>
          </div>

          <div className='col-span-1 order-1 sm:order-none sm:col-span-1'>
            {(page_summary?.thumbnail?.source ??
              page_summary?.originalimage?.source) && (
                <img
                  src={
                  page_summary?.thumbnail?.source ??
                  page_summary?.originalimage?.source
                }
                  alt={page_summary?.title}
                  className='rounded-md'
                />
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default Single
