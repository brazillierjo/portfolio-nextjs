import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Presentation from './components/Presentation'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import CV from './components/CV'
import Portfolio from './components/Portfolio'
import Switch from '@mui/material/Switch';

export default function Home() {

  const [isDark, setIsDark] = useState(false)
  const [isFrench, setIsFrench] = useState(true)

  useEffect(() => {
    if (isFrench) {
      setIsFrench(true)
    } else {
      setIsFrench(false)
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

          <div className='flex justify-center text-xs'>
            <a className='my-1 mx-3' href='mailto:j.brazillier@gmail.com'>j.brazillier@gmail.com</a>
            <a className='my-1 mx-3' href='tel:+33638027649'>+33(0)6.38.02.76.49</a>
            <div className='flex justify-center mx-3'>
              {isDark ? <img className='dark-icons' src="/assets/sun.gif" alt="" /> : ""}
              <Switch onClick={() => !setIsDark(!isDark)} label='night-mode' color='secondary' size='small' />
              {isDark ? "" : <img className='dark-icons' src="/assets/moon.gif" alt="" />}
            </div>
            <div className='flex mx-3'>
              <label htmlFor="lang"></label>
              <select className='dark:bg-slate-900 dark:text-white' name="lang" id="lang">
                <option value="fr" onChange={() => setIsFrench(true)}>FR 🇫🇷</option>
                <option value="en" onChange={() => setIsFrench(false)}>EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
              </select>
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
            <defs>
              <path id="gentle-wave"
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
