import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function Navbar() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <nav className="flex justify-between mx-5 px-32 py-3 rounded-3xl bg-slate-100 shadow-2xl dark:bg-slate-700 customNav">
            <Image src="/images/hey.png" width="110" height="110" className="inline bg-orange-300 mr-2 rounded-full borderAvatar" alt="Avatar" />
            <div className="hidden space-x-8 lg:flex md:mr-6 my-auto">
                <a className='hover:underline' href="">{t.hello}</a>
                <a className='hover:underline' href="">{t.whoami}</a>
                <a className='hover:underline' href="">{t.skills}</a>
                <a className='hover:underline' href="">{t.cv}</a>
                <a className='hover:underline' href="">{t.projects}</a>
                <a className='hover:underline' href="">{t.reco}</a>
                <a className='hover:underline' href="">{t.contact}</a>
            </div>
        </nav>
    )
}