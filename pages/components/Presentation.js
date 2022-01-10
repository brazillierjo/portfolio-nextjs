import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'


export default function Presentation() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div id='whoami' className='md:flex md:w-4/5 mx-auto md:p-12'>
            <div className='md:w-1/3 m-5'>
                <img className='hidden md:block rounded-md' src="/assets/profile.jpg" alt="Profile picture" />
                <div className='hidden md:block space-x-4 mt-12'>
                    <div className='flex justify-center'>
                        <a target="_blank" href="https://github.com/brazillierjo?tab=repositories">
                            <img className='icons-size mx-3' src="/assets/svg/github-brands.svg" alt="github icon" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/johan-brazillier-9b917a174/">
                            <img className='icons-size mx-3' src="/assets/svg/linkedin-brands.svg" alt="linkedin icon" />
                        </a>
                        <a target="_blank" href="https://bzrjoh.notion.site/RINCON-BRAZILLIER-Johan-219bf0d4b31449faabf1ba6343bccc7b">
                            <img className='icons-size mx-3' src="/assets/svg/notion-brands.svg" alt="notion icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3 m-5'>
                <h1 className='big-title2 text-left md:text-center` font-extrabold'>RINCON BRAZILLIER Johan</h1>

                <h2 className='flex big-title2 my-4 text-center md:text-left'>{t.job}</h2>

                <p className='mt-8'>{t.catchphrase}</p>
                <p className='my-2'>{t.catchphrase2}</p>

                <p className='mt-12'>{t.presentation}</p>

                <div className='mt-6'>
                    <div className='flex justify-start'>
                        <p className='mr-2'>{t.emailme} </p>
                        <a className='italic text-gray-700 dark:text-gray-300' href="mailto:j.brazillier@gmail.com">j.brazillier@gmail.com</a>
                    </div>
                    <div className='flex justify-start'>
                        <p className='mr-2'>{t.phoneme}</p>
                        <a className='italic text-sm text-gray-700 dark:text-gray-300' href="tel:+33678901234">+33 6 38 02 76 49</a>
                    </div>
                </div>

                <div className='block md:hidden mt-12'>
                    <div className='flex justify-center'>
                        <a target="_blank" href="https://github.com/brazillierjo?tab=repositories">
                            <img className='icons-size mx-2' src="/assets/svg/github-brands.svg" alt="github icon" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/johan-brazillier-9b917a174/">
                            <img className='icons-size mx-2' src="/assets/svg/linkedin-brands.svg" alt="linkedin icon" />
                        </a>
                        <a target="_blank" href="https://bzrjoh.notion.site/RINCON-BRAZILLIER-Johan-219bf0d4b31449faabf1ba6343bccc7b">
                            <img className='icons-size mx-2' src="/assets/svg/notion-brands.svg" alt="notion icon" />
                        </a>
                    </div>
                </div>
                <div className='text-center md:text-left mt-12'>
                    <a target="_blank" href="/assets/CV-RINCON-BRAZILLIER-Johan.pdf" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{t.download}
                    </a>
                </div>
            </div>
        </div>
    )
}