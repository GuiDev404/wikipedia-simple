import React from 'react'
import Header from '../components/Header'
import { ReadIcon } from '../components/Icons'

import Trending from '../components/Trending'
import OnThisDay from '../components/OnThisDay'
import ImageOfDay from '../components/ImageOfDay'
import Anchor from '../components/Anchor'
import { HOME_MAIN_LINKS } from '../const/links'
import ListOfLinks from '../components/ListOfLinks'
import Tabs from '../components/Tabs'

const tabs = [
  { id: 0, content: <Trending />, label: 'Tendencias' },
  { id: 1, content: <OnThisDay />, label: 'En este dia' },
  { id: 2, content: <ImageOfDay />, label: 'Imagen del dia' }
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
        className='py-8 md:py-0'
      >
        <div className='my-10 flex items-center flex-col'>
          <Anchor
            url='#comenzar'
            className='hover:border-neutral-300 hover:text-zinc-600 bg-white border-neutral-200 py-3 px-5 text-zinc-700 mb-10'
          >
            <ReadIcon width='20' height='20' />
            Comenzar a leer
          </Anchor>

          <ListOfLinks
            links={HOME_MAIN_LINKS}
            className='justify-center text-center gap-3 my-5'
            isAnchor
          />
        </div>
      </Header>

      <div className='px-5' id='comenzar'>

        <Tabs
          classNameHeader='gap-8 ml-2 mb-6 text-lg'
          className='block sm:hidden'
          tabs={tabs}
        />

        <div
          className='hidden sm:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2'
        >
          <OnThisDay />
          <Trending />
          <ImageOfDay />
        </div>

      </div>
    </>
  )
}

export default Home
