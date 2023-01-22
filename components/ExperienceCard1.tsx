/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const ExperienceCard1 = () => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] h-34 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            {/* <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="../kd.jpg" alt="prp" /> */}

            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="../MockyCAt.png" alt="prp" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>FullStack Developer</h4>
                <p className='font-bold text-2xl mt-1'>MockyCat</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used */}
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/f84jpum9/production/359a65114b1d56ad5ee0809bfff4bf397ee5aba5-360x360.png?w=2000&fit=max&auto=format"
                        alt="prp"
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/f84jpum9/production/07d2cd8ec07073915f3a128de4d3286490abf0b2-800x600.png?w=2000&fit=max&auto=format"
                        alt="prp"
                    />
                    {/* {experience?.technologies?.map(technology => (
                        <img
                            key={technology._id}
                            className='h-10 w-10 rounded-full'
                            src={urlFor(technology.image).url()}
                            alt="prp"
                        />
                    ))} */}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Monday Dec 05 2022 - Present
                </p>
                <ul className='list-disc space-y-4 ml-5 text-sm max-h-40 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                    <li>Creating a Signup and Login Api's for User's in out application </li>
                    <li>Integrating Jest unit testing for user and the Enterprise application </li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard1