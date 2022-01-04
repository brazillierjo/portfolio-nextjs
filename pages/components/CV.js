import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function CV() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div className='text-center'>
            <a target="_blank" href="/assets/CV-RINCON-BRAZILLIER-Johan.pdf" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{t.download}
            </a>
        </div>
    )
}
