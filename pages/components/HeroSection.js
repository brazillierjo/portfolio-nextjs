import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'
import Navbar from './Navbar'

export default function HeroSection() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div className="py-3 rounded-md customBackground dark:bg-slate-700 text-white">

            <Navbar />

            <div className='text-center mt-8 mb-8'>
                <img className='w-1/6 m-auto mb-5' src="/images/html.png" alt="html logo" />
                <h1 className='big-title font-extrabold'>RINCON-BRAZILLIER Johan</h1>
                <h2 className='big-title2 mb-8'>{t.job}</h2>
                <p className='font-extrabold'>{t.catchphrase}</p>
                <p className='font-extrabold'>{t.catchphrase2}</p>
            </div>

        </div>
    )
}