import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card'
import Image from 'next/image'
// const campuslink = '@/../public/images/Campuslink.png'
interface Project {
    id: number
    title: string
    description: string
    link: string
    src: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Connectify",
        description: "Built a community platform using MERN stack where verified doctors and health professionals, like gym owners, can create and manage communities.",
        link: "#",
        src: '/Projects/connectify.png'
    },
    {
        id: 2,
        title: "DevLance",
        description: "Developed a platform using Node.js to fetch and display detailed GitHub user stats,.",
        link: "#",
        src: '/Projects/Devlance.png'
    },
    {
        id: 3,
        title: "Task Manager",
        description: "An intuitive task manager to organize, prioritize, and track your tasks efficiently for enhanced productivity.",
        link: "#",
        src: '/Projects/todo.png'
    },

]
const page = () => {
    return (
        <>
            <div className='pt-14'>

                <h1 className='text-white font-bold font-serif text-3xl border-b border-blue-700 inline-block p-3 rounded-xl '  >Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center py-20 ">
                    {projects.map((project) => (
                        <CardContainer key={project.id} className="inter-var w-full" >
                            <CardBody className="bg-gradient-to-b via-gray-800 to from-zinc-900 to  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-gray-300 w-full sm:w-[30rem] md:w-auto h-auto rounded-xl p-6 border">
                                <CardItem translateZ="50" className="text-2xl font-bold text-white dark:text-white">
                                    {project.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {project.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={project.src}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl" style={{ "objectFit": 'scale-down' }}
                                        alt="thumbnail"
                                    />

                                </CardItem>
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-4">
                                    <CardItem
                                        translateZ={20}
                                        href={project.link}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-[16px] font-medium bg-green-700  text-white mb-2 sm:mb-0"
                                    >
                                        Github →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-blue-500 text-white text-[16px] font-bold"
                                    >
                                        Preview
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>

        </>
    )
}

export default page
