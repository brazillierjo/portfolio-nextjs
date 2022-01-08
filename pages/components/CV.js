import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function CV() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <div id='cv'>
            <div className='md:w-2/3 mx-auto mb-12 p-5'>
                <h1 className='big-title2 text-center my-4'>{t.about}</h1>
                <p className="p-1 text-justify">{t.cv_presentation}</p>
                <p className="p-1 text-justify">{t.cv_presentation2}</p>
                <p className="p-1 text-justify">{t.cv_presentation3}</p>
            </div>

            <div>
                <h1 className='big-title2 text-center my-4'>{t.experiences}</h1>
                <div className="md:w-2/3 mx-auto mb-12 p-5">
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.job1}</p>
                        <p className='text-gray-500 dark:text-gray-300 italic'>{t.period1}</p>
                        <p className='italic'>{t.details1}</p>
                        <div>
                            <p className='mt-4'>{t.stack}</p>
                            <ul className='flex flex-wrap my-2'>
                                <li className='stack-buttons text-black'>HTML</li>
                                <li className='stack-buttons text-black'>CSS</li>
                                <li className='stack-buttons text-black'>JavaScript</li>
                                <li className='stack-buttons text-black'>NodeJs</li>
                                <li className='stack-buttons text-black'>Express</li>
                                <li className='stack-buttons text-black'>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.job2}</p>
                        <p className='text-gray-500 dark:text-gray-300 italic'>{t.period2}</p>
                        <p className='italic'>{t.details2}</p>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.job3}</p>
                        <p className='text-gray-500 dark:text-gray-300 italic'>{t.period3}</p>
                        <p className='italic'>{t.details3}</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='big-title2 text-center my-4'>{t.diplomas}</h1>
                <div className="md:w-2/3 mx-auto mb-12 p-5">
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.diploma1}</p>
                        <p>{t.diploma1details}</p>
                        <p className='text-gray-500 dark:text-gray-300'>🗓 {t.diploma1period}</p>
                        <p>📍{t.diploma1place}</p>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.diploma2}</p>
                        <p>{t.diploma2details}</p>
                        <p className='text-gray-500 dark:text-gray-300'>🗓 {t.diploma2period}</p>
                        <p>📍{t.diploma2place}</p>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.diploma3}</p>
                        <p className='text-gray-500 dark:text-gray-300'>🗓 {t.diploma3period}</p>
                        <p>📍{t.diploma3place}</p>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.diploma4}</p>
                        <p className='text-gray-500 dark:text-gray-300'>🗓 {t.diploma4period}</p>
                        <p>📍{t.diploma4place}</p>
                    </div>
                    <div className='m-2 bg-gray-100 dark:bg-gray-600 rounded-md p-6'>
                        <p className='font-black'>{t.diploma5}</p>
                        <p className='text-gray-500 dark:text-gray-300'>🗓 {t.diploma5period}</p>
                        <p>📍{t.diploma5place}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
