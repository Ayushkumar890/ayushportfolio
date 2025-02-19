import React from 'react'
// import { Button } from '../ui/button'

interface Skill {
    name: string
    color: string
}

const skills: Skill[] = [
    { name: "HTML", color: "bg-[linear-gradient(110deg,#000103,45%,#003310,50%,#000103)] border-green-800 " },
    { name: "CSS", color: "bg-[linear-gradient(110deg,#000103,45%,#8B0000,50%,#000103)]  border-red-800 " },
    { name: "React", color: "bg-[linear-gradient(110deg,#000103,45%,#0100FE,50%,#000103)]  border-blue-800 " },
    { name: "Node.js", color: "bg-[linear-gradient(110deg,#000103,45%,#556B2F,50%,#000103)]  border-green-400 " },
    { name: "TypeScript", color: "bg-[linear-gradient(110deg,#000103,45%,#4B0082,50%,#000103)]  border-purple-800 " },
    { name: "NextJs", color: "bg-[linear-gradient(110deg,#000103,45%,#3E2723,50%,#000103)]  border-brown-800 " },
    { name: "JavaScript", color: "bg-[linear-gradient(110deg,#000103,45%,#B8860B,50%,#000103)]  border-yellow-700 " },
    { name: "Tailwind Css", color: "bg-[linear-gradient(110deg,#000103,45%,#00BFFF,50%,#000103)]  border-blue-300 " },
    { name: "Bootstrap", color: "bg-[linear-gradient(110deg,#000103,45%,#8B008B,50%,#000103)]  border-pink-500 " },
    { name: "Express.js", color: "bg-[linear-gradient(110deg,#000103,45%,#A9A9A9,50%,#000103)]  border-white" },
    { name: "MongoDB", color: "bg-[linear-gradient(110deg,#000103,45%,#003310,50%,#000103)]  border-green-800 " },
    { name: "Java", color: "bg-[linear-gradient(110deg,#000103,45%,#FF4500,50%,#000103)]  border-orange-700 " },
    { name: "Python", color: "bg-[linear-gradient(110deg,#000103,45%,#003310,50%,#000103)]  border-green-800 " },
    { name: "Github", color: "bg-[linear-gradient(110deg,#000103,45%,#A9A9A9,50%,#000103)]  border-white " },
    { name: "C++", color: "bg-[linear-gradient(110deg,#000103,45%,#7E1F1B,50%,#000103)]  border-red-600 " },
    { name: "Firebase", color: "bg-[linear-gradient(110deg,#000103,45%,#C49A6C,50%,#000103)]  border-yellow-100 " },
]

const page = () => {
    return (
        <div >
            <h1 className='md:text-3xl font-bold font-serif text-3xl border-b border-blue-700 inline-block p-3 rounded-xl '>Skills</h1>
            <div className='flex items-center flex-wrap gap-7 md:mx-6 pt-16'>
                {skills.map((skill) => (
                    <div key={skill.name} >
                        <div className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border ${skill.color} bg-[length:200%_150%] px-6 font-medium text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-xl focus:ring-offset-slate-50`}>
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
