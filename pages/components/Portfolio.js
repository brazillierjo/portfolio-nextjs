import React from 'react'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function Portfolio() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    const loop = []
    const loopStack = []

    const projects = {
        1: {
            title: 'Waletoo',
            description: t.waletoo_description,
            image: '/assets/projects/waletoo.png',
            stack: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'NodeJs', 'Express', 'MongoDB', 'Mongoose']
        },
        2: {
            title: 'Waletoo',
            description: t.waletoo_description,
            image: '/assets/projects/waletoo.png',
            stack: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'NodeJs', 'Express', 'MongoDB', 'Mongoose']
        },
    }

    for (let i = 0; i < projects.length; i++) {
        loopStack.push(
            <li className='stack-buttons text-black' key={projects[i].stack[i]}>{projects[i].stack[i]}</li>
        )
    }

    for (let i in projects) {
        loop.push(
            <div className='w-1/2 p-5 m-5'>
                <img src={projects[i].image} alt="project image representation" />
                <h2 className='text-2xl my-3 font-black'>{projects[i].title}</h2>
                <p>{projects[i].description}</p>
                <p className='mt-4'>{t.stack}</p>
                <ul className='flex flex-wrap my-2'>
                    {loopStack}
                </ul>
            </div>
        )
    }

    return (
        <>
            <h1 id='projects' className='big-title2 text-center  my-4'>My personal projects</h1>
            <div className='flex flex-wrap justify-center'>
                <p>{loop}</p>
            </div>
        </>
    )
}
