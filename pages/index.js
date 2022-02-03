import React, { useState } from 'react'
import Head from 'next/head'
import Presentation from './components/Presentation'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import CV from './components/CV'
import Portfolio from './components/Portfolio'
import Switch from '@mui/material/Switch'
import { useRouter } from 'next/router'
import fr from '../languages/fr'
import en from '../languages/en'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  const router = useRouter()
  const { locale } = router
  const t = locale === 'fr' ? fr : en

  return (
    <div>
      <Head>
        <title>RINCON BRAZILLIER Johan</title>
        <meta name="description" content="Portfolio - NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={isDark ? 'dark' : ''}>
        <div className='dark:bg-slate-900 dark:text-white'>

          <div className='flex justify-evenly text-xs pt-1'>

            <div className='hidden md:flex space-x-8'>
              <a className='text-xs' href="mailto:j.brazillier@gmail.com">j.brazillier@gmail.com</a>
              <a className='text-xs' href="tel:+33638027649">+33(0)6.38.02.76.49</a>
            </div>

            <div className='flex space-x-8'>
              <div className='flex space-x-2'>
                <p>{isDark ? 'Night mode' : 'Light mode'}</p>
                <Switch onClick={() => !setIsDark(!isDark)} label='night-mode' color='warning' size='small' />
              </div>

              <Menu as="div" className="inline-block text-left noSelect">
                <div>
                  <Menu.Button className="px-2 inline-flex justify-center rounded-md text-xs noSelect">
                    {t.lang}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute z-50 noSelect">
                  <div>
                    <Menu.Item>
                      <a href="https://brazillierjohan.fr/fr" className='noSelect border mr-2 bg-white text-gray-900 px-2 text-sm rounded-md hover:bg-gray-300'>FR 🇫🇷</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="https://brazillierjohan.fr/en" className='noSelect border bg-white text-gray-900 px-2 text-sm rounded-md hover:bg-gray-300'>EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          <HeroSection />
          <Presentation />
          <hr />
          <CV />
          <hr />
          <Skills />
          <hr />
          <Portfolio />
          <svg className="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none">
            <defs><path id="gentle-wave"
              d="M-160 44c30 0 
                  58-18 88-18s
                  58 18 88 18 
                  58-18 88-18 
                  58 18 88 18
                  v44h-352z" />
            </defs>
            <g className="parallax1">
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="#8be091" />
            </g>
            <g className="parallax2">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
            </g>
            <g className="parallax3">
              <use xlinkHref="#gentle-wave" x="50" y="9" fill="#f461c1" />
            </g>
          </svg>
        </div>
      </main >
    </div >
  )
}
