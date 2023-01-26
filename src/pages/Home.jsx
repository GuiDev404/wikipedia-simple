import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { ReadIcon } from '../components/Icons'

import Trending from '../components/Trending'
import OnThisDay from '../components/OnThisDay'
import ImageOfDay from '../components/ImageOfDay'

const HOME_MAIN_LINKS = [
  {
    url: 'https://es.wikipedia.org/wiki/Wikipedia:Contacto',
    label: 'Contacto'
  },
  { url: 'https://es.wikipedia.org/wiki/Ayuda:Contenidos', label: 'Ayuda' },
  {
    url: 'https://es.wikipedia.org/wiki/Ayuda:Introducci%C3%B3n',
    label: 'Primeros pasos'
  },
  { url: 'https://es.wikipedia.org/wiki/Wikipedia:Caf%C3%A9', label: 'Café' },
  {
    url: 'https://es.wikipedia.org/wiki/Ayuda:C%C3%B3mo_puedes_colaborar',
    label: '¿Cómo colaborar?'
  }
]

const Home = () => {
  return (
    <>
      <Header
        title={
          <>
            Bievenidos a <span className='text-blue-600'> Wikipedia </span>
          </>
        }
        subtitle='La enciclopedia de contenido libre
        que todos pueden editar'
      >
        <div className='my-10 flex items-center flex-col'>
          <Button
            isLink
            url='#comenzar'
            text='Comenzar a leer'
            styles='hover:border-neutral-400 hover:text-zinc-800 bg-white border-neutral-300 py-3 px-5 text-zinc-700 mb-10'
            leftIcon={<ReadIcon width='20' height='20' />}
          />

          <section className='flex gap-3 my-5'>
            {HOME_MAIN_LINKS.map((link) => (
              <a
                key={link.label}
                className='hover:underline rounded-md text-[.8rem] px-3 py-2'
                href={link.url}
              >
                {link.label}
              </a>
            ))}
          </section>
        </div>
      </Header>

      {/* grid md:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-4 */}
      <div className='px-5   grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2' id='comenzar'>
        <OnThisDay />
        <Trending />
        <ImageOfDay />
      </div>
    </>
  )
}

export default Home
