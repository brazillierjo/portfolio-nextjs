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
        <div className="py-3 rounded-md bg-slate-100 dark:bg-slate-700">

            <Navbar />

            <div className='text-center mt-8 mb-8'>
                <h1 className='text-3xl'>RINCON-BRAZILLIER Johan</h1>
                <h2 className='text-2xl'>{t.job}</h2>
                <img className='w-1/4 mt-5 inline bg-orange-300 mr-2 rounded-full borderAvatar' src="/images/hey.png" alt="avatar" />
            </div>

        </div>
    )
}