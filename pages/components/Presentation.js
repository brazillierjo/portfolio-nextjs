import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function Presentation() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div id='hello' className='flex justify-between w-4/5 mx-auto p-12'>
            <div>
                <img className='rounded-md w-3/4' src="/images/profile.jpg" alt="Profile picture" />
            </div>
            <div>
                <h1 className='big-title2 font-extrabold'>RINCON-BRAZILLIER Johan</h1>

                <h2 className='big-title2 my-4'>{t.job}</h2>

                <p className='mt-8 font-extrabold'>{t.catchphrase}</p>
                <p className='my-4 font-extrabold'>{t.catchphrase2}</p>
            </div>
        </div>
    )
}