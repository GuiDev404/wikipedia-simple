import { Link } from 'react-router-dom'
import useToday from '../hooks/useToday'
import { CalendarIcon } from './Icons'

const OnThisDayList = ({ onThisDayLs }) => {
  return (
    <>
      {Boolean(onThisDayLs && onThisDayLs.length > 0)
        ? onThisDayLs.map(article => {
          const { pageid, normalizedtitle, title } = article.pages[0]

          return (
            <OnThisDayItem
              key={pageid}
              normalizedtitle={normalizedtitle}
              text={article.text}
              title={title}
              year={article.year}
            />
          )
        })
        : <p className='text-lg text-gray-500 mt-5'> No hay un dia como hoy aun </p>}
    </>
  )
}

const OnThisDayItem = ({ year, normalizedtitle, title, text }) => {
  return (
    <div className='my-5 bg-white rounded-md border border-neutral-200 p-4'>
      <span className='font-semibold flex gap-1 items-center'>
        <CalendarIcon width={16} height={16} />
        {year}
      </span>
      <p className='text-sm text-neutral-900 mt-1 mb-4'> {text} </p>
      <Link className='bg-gray-100 p-1 px-2 rounded-md text-xs mt-3 hover:underline' to={`/article/${title}`}>
        {normalizedtitle}
      </Link>
    </div>
  )
}

const OnThisDay = () => {
  const { data, error, isLoading } = useToday()

  if (error) return <p> {error?.message ?? 'Error'} </p>

  return (
    <aside className='p-2  order-1 md:order-1'>
      <h2 className='text-2xl font-bold '> Un dia como hoy en </h2>

      {isLoading
        ? [...Array(3).keys()].map((key) => (
          <div key={key}>
            <div className='mt-5 h-6 w-32 rounded-md animate-pulse bg-neutral-200 shadow-sm'>  </div>
            <div className='mt-2 h-24 w-full rounded-md animate-pulse bg-neutral-200 shadow-sm'> </div>
          </div>
          ))
        : <OnThisDayList onThisDayLs={data?.onthisday} />}
    </aside>
  )
}

export default OnThisDay
