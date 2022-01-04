import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Presentation from './components/Presentation'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import CV from './components/CV'
import Switch from '@mui/material/Switch';

export default function Home() {

  const [isDark, setIsDark] = useState(false)
  const [isFrench, setIsFrench] = useState(true)

  useEffect(() => {
    if (isFrench) {
      console.log(isFrench)
      setIsFrench(true)
    } else {
      setIsFrench(false)
      console.log(isFrench)
    }
  }, [isFrench])

  return (
    <div>
      <Head>
        <title>RINCON BRAZILLIER Johan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={isDark ? 'dark' : ''}>
        <div className='dark:bg-slate-900 dark:text-white'>

          <div className='flex text-xs justify-evenly p-1'>
            <div className='space-x-8 p-1'>
              <a className='mx-5' href='mailto:j.brazillier@gmail.com'>j.brazillier@gmail.com</a>
              <a className='mx-5' href='tel:+33638027649'>+33(0)6.38.02.76.49</a>
            </div>

            <div className='flex space-x-8'>

              <div className='flex justify-center'>
                <Switch onClick={() => !setIsDark(!isDark)} label='night-mode' color='secondary' size='small' />
                {isDark ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              </div>

              <div className='flex'>
                <label htmlFor="lang"></label>
                <select className='dark:bg-slate-900 dark:text-white' name="lang" id="lang">
                  <option value="fr" onChange={() => setIsFrench(true)}>Français</option>
                  <option value="en-US" onChange={() => setIsFrench(false)}>English</option>
                </select>
              </div>

            </div>
          </div>

          <HeroSection />
          <Presentation />

          <CV />
          <Skills />
          <svg class="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave"
                d="M-160 44c30 0 
                  58-18 88-18s
                  58 18 88 18 
                  58-18 88-18 
                  58 18 88 18
                  v44h-352z" />
            </defs>
            <g class="parallax1">
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f461c1" />
            </g>
            <g class="parallax2">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
            </g>
            <g class="parallax3">
              <use xlinkHref="#gentle-wave" x="50" y="9" fill="#8be091" />
            </g>
          </svg>
        </div>
      </main >
    </div >
  )
}
