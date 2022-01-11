import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function Portfolio() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    const projects = {
        1: [
            'Waletoo',
            '(2021)',
            t.waletoo_description,
            '/assets/projects/waletoo.png',
            ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'NodeJs', 'Express', 'MongoDB', 'Mongoose', 'Heroku'],
            'https://waletoo.herokuapp.com/',
        ],
        2: [
            'Vitassurance',
            '(2021)',
            t.vitassurance_description,
            '/assets/projects/vitassurance.png',
            ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'NodeJs', 'Express', 'MySQL', 'OVH'],
            'https://vitassurance.fr/',
        ],
        3: [
            'Web Calculator',
            '(2020)',
            t.calculator_description,
            '/assets/projects/calculator.png',
            ['HTML', 'CSS', 'JavaScript'],
            'https://brazillierjo.github.io/calculator/',
        ],
        4: [
            'Markdown Previewer',
            '(2020)',
            t.markdown_description,
            '/assets/projects/markdown.png',
            ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
            'https://brazillierjo.github.io/markdown/',
        ],
    }


    return (
        <div className='mb-12'>
            <h1 id='projects' className='big-title2 text-center my-4'>{t.titlePortfolio}</h1>
            <div className='flex flex-wrap justify-evenly'>
                {Object.entries(projects).map(([a, b], i) => (
                    <div className='relative border-white-500 bg-white shadow-2xl text-black rounded-lg w-full md:w-2/5 p-5 m-5'>
                        <a href={b[5]} target="_blank">
                            <img className='rounded-lg hover:opacity-70 w-full' src={b[3]}
                                alt="project picture" />
                        </a>
                        <h1 className='big-title2 text-center mt-4'>{b[0]}</h1>
                        <small className='absolute right-3'>{b[1]}</small>
                        <p className='my-5 p-2 rounded-lg'>{b[2]}</p>
                        <ul className='flex flex-wrap justify-center my-8'>{b[4].map((item, i) =>
                            <li className='stack-buttons text-black' key={i++}>{item}</li>)}
                        </ul>
                        <div className='text-center'>
                            <a className='rounded-full bg-blue-800 px-4 py-2 text-white text-xl' href={b[5]} target="_blank">{t.seeProject}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
