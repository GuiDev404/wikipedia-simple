import useRandom from '../hooks/useRandom'
import ArticleSmallPreview from './ArticleSmallPreview'

const RandomArticle = () => {
  const { data, error, isLoading } = useRandom()

  if (error) return null

  return isLoading
    ? ''
    : (
      <div className='flex flex-col items-start gap-3'>
        <p className='text-lg font-semibold'> Articulo aletorio </p>

        <ArticleSmallPreview
          img={data.thumbnail || data.originalimage}
          title={data.title}
          description={data.description}
          linkPreview={`/article/${data.title}`}
          titleFontSize='text-sm'
        />

        {/* <div className='flex items-start gap-3 rounded-md w-full px-4 py-2 bg-white border border-gray-200'>
          {((data.thumbnail || data.originalimage)) &&
            <img src={data.thumbnail.source ?? data.originalimage.source} className='object-cover w-9 h-9 rounded-md' />}
          <div className='text-left'>
            <Link to={`/article/${data.title}`}>
              <h1 className='text-sm font-bold'>
                {' '}
                {data.title}{' '}
              </h1>
            </Link>
            <p className='text-sm text-gray-700 ellipsis ellipsis-1'> {data?.description} </p>
          </div>
        </div> */}
      </div>
      )
}

export default RandomArticle
