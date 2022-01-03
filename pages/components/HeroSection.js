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
        //replace 'forest' by hero-image for static picture
        <div className="py-3 rounded-md forest">

            <Navbar />

        </div>
    )
}