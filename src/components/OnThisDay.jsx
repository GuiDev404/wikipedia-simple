import { Link } from 'react-router-dom'
import useToday from '../hooks/useToday'
import { CalendarIcon } from './Icons'

const OnThisDay = () => {
  const { data, error, isLoading } = useToday()

  if (error) return <p> {error?.message ?? 'Error'} </p>

  // md:row-start-1  md:col-start-3 md:col-end-4 md:order-1 lg:col-start-1 lg:col-end-2 lg:order-[-1]

  return (
    <aside className='p-2  order-1 md:order-1'>
      <h2 className='text-2xl font-bold '> Un dia como hoy en: </h2>

      {isLoading
        ? 'Loading...'
        : data.onthisday.map(article => {
          const { pageid, normalizedtitle, title } = article.pages[0]

          return (
            <div key={pageid} className='my-5 bg-white rounded-md border border-neutral-200 p-4'>
              <span className='font-semibold flex gap-1 items-center'>
                <CalendarIcon width={16} height={16} />
                {article.year}
              </span>
              <p className='text-sm text-neutral-900 mt-1 mb-4'> {article.text} </p>
              <Link className='bg-gray-100 p-1 px-2 rounded-md text-xs mt-3 hover:underline' to={`/article/${title}`}>
                {normalizedtitle}
              </Link>
            </div>
          )
        })}
    </aside>
  )
}

export default OnThisDay
