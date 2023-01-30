import { Link } from 'react-router-dom'
import Header from '../components/Header'

const NotFound = () => {
  return (
    <Header
      title='Not Found'
      subtitle='Lo sentimos esta pagina no existe o no pude ser encontrada'
    >
      <Link to='/' className=' text-lg py-2 px-6 m-4 hover:underline hover:text-blue-800 rounded-md inline-block'>
        Volver al inicio
      </Link>
    </Header>
  )
}

export default NotFound
