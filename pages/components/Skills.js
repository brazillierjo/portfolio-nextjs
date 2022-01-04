import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function Skills() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div id='skills' className='my-8'>
            <h1 className='text-center text-3xl'>{t.skills2}</h1>

            <div className='flex flex-wrap justify-center md:justify-around md:w-3/5 mx-auto mt-8'>
                <img className='logo-skills' src="/assets/logos/HTML.png" alt="HTML logo" />
                <img className='logo-skills' src="/assets/logos/CSS.png" alt="CSS logo" />
                <img className='logo-skills' src="/assets/logos/JavaScript.png" alt="JavaScript logo" />
                <img className='logo-skills' src="/assets/logos/react.png" alt="REACT logo" />
                <img className='logo-skills' src="/assets/logos/nextjs.png" alt="NextJs logo" />
                <img className='logo-skills' src="/assets/logos/vue.png" alt="Vue logo" />
                <img className='logo-skills' src="/assets/logos/nodejs.png" alt="NodeJs logo" />
                <img className='logo-skills' src="/assets/logos/api.png" alt="API logo" />
                <img className='logo-skills' src="/assets/logos/bootstrap.png" alt="Bootstrap logo" />
                <img className='logo-skills' src="/assets/logos/tailwind.png" alt="tailwind logo" />
                <img className='logo-skills' src="/assets/logos/MySQL.png" alt="MySQL logo" />
                <img className='logo-skills' src="/assets/logos/mongo.png" alt="mongo logo" />
                <img className='logo-skills' src="/assets/logos/firebase.png" alt="firebase logo" />
                <img className='logo-skills' src="/assets/logos/github.png" alt="github logo" />
            </div>

        </div>
    )
}
