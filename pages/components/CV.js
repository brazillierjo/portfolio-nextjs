import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function CV() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div>
            <div className='md:w-2/3 mx-auto mb-12 p-5'>
                <h1 className='big-title2 text-center my-4'>{t.about}</h1>
                <p className="p-1 text-justify">{t.cv_presentation}</p>
                <p className="p-1 text-justify">{t.cv_presentation2}</p>
                <p className="p-1 text-justify">{t.cv_presentation3}</p>
            </div>

            <div>
                <h1 className='big-title2 text-center my-4'>{t.experiences}</h1>
            </div>

            <div>
                <h1 className='big-title2 text-center my-4'>{t.diplomas}</h1>
            </div>
        </div>
    )
}
