import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'
import Presentation from './Presentation'

export default function CV() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div>
            <div className='text-center'>
                <a target="_blank" href="/assets/CV-RINCON-BRAZILLIER-Johan.pdf" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{t.download}
                </a>
            </div>

            <div>
                <p className="">{t.cv_presentation}</p>
                <p className="">{t.cv_presentation2}</p>
                <p className="">{t.cv_presentation3}</p>
            </div>
        </div>
    )
}
