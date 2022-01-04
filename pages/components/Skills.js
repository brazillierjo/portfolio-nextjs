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
            <h1 className='text-center text-3xl'>{t.skills}</h1>

            <div className='flex flex-wrap justify-center md:justify-around md:w-3/5 mx-auto mt-8'>
                <img className='logo-skills' src="/images/logos/HTML.png" alt="HTML logo" />
                <img className='logo-skills' src="/images/logos/CSS.png" alt="CSS logo" />
                <img className='logo-skills' src="/images/logos/JavaScript.png" alt="JavaScript logo" />
                <img className='logo-skills' src="/images/logos/react.png" alt="REACT logo" />
                <img className='logo-skills' src="/images/logos/nextjs.png" alt="NextJs logo" />
                <img className='logo-skills' src="/images/logos/vue.png" alt="Vue logo" />
                <img className='logo-skills' src="/images/logos/nodejs.png" alt="NodeJs logo" />
                <img className='logo-skills' src="/images/logos/api.png" alt="API logo" />
                <img className='logo-skills' src="/images/logos/bootstrap.png" alt="Bootstrap logo" />
                <img className='logo-skills' src="/images/logos/tailwind.png" alt="tailwind logo" />
                <img className='logo-skills' src="/images/logos/MySQL.png" alt="MySQL logo" />
                <img className='logo-skills' src="/images/logos/mongo.png" alt="mongo logo" />
                <img className='logo-skills' src="/images/logos/firebase.png" alt="firebase logo" />
                <img className='logo-skills' src="/images/logos/github.png" alt="github logo" />
            </div>

        </div>
    )
}
