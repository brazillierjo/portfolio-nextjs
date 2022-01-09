import React from 'react'

export default function Portfolio() {
    const projects = {
        1: { title: 'test&' },
        2: { title: 'test1' },
        3: { title: 'test2' }
    }
    const loop = []

    for (let i in projects) {
        loop.push(
            <p>{projects[i].title}</p>
        )
    }

    return (
        <div>
            <h1 id='projects' className='big-title2'>PORTFOLIO</h1>
            <p>{loop}</p>
        </div>
    )
}
