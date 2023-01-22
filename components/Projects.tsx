import React from 'react'
import { motion } from 'framer-motion'
// import { Project } from '../typing';
// import { urlFor } from '../sanity';
import projects from './Project'
import Link from 'next/link'

type Props = {}

function Projects() {

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative flex w-ful overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects?.map((project, i) => {

                    const { id, image, link } = project
                    return (
                        <>
                            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-[1200px]'>
                                <motion.img
                                    initial={{
                                        y: -300,
                                        opacity: 0
                                    }}
                                    transition={{ duration: 1.2 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    src={image} alt='prp'
                                // className='md:w-32 w-12 h-12'
                                />
                                <div key={i} className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-4xl font-semibold text-center'>
                                        <span className='underline decoration-[#F7AB0A]/50'> Case Study {i + 1} of {projects.length} : </span>
                                        <Link href={link}>
                                            {project?.title}
                                        </Link>

                                    </h4>

                                    <div className='flex items-center space-x-2 justify-center'>
                                        {project?.technology?.map((technology) => (
                                            <img
                                                className='h-10 w-10'
                                                key={technology.id}
                                                src={technology.image}
                                                alt='prp'
                                            />
                                        ))}
                                    </div>

                                    <p className='text-lg text-center md:text-left'>
                                        {project?.summary}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects