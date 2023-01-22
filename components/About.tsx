/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
// import profile from '../public/kd.jpg'

type Props = {}

const About = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.2
            }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src="../kd.jpg"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
                </h4>
                <p className='text-base'>
                    I am a software developer who can handle all aspects of a web development project, from the front-end <span className='underline decoration-[#F7AB0A]'>(client side)</span> to the back-end <span className='underline decoration-[#F7AB0A]'>(server side)</span>. This typically includes proficiency in languages such as HTML, CSS, JavaScript, ReactJs, NextJs, Typescript for the front-end, and languages such as NodeJs, ExpressJs, or NestJS for the back-end, as well as experience with databases, web servers, and other technologies.With a strong passion for problem-solving and a desire to create innovative and useful software, i am totally dedicated to delivering high-quality, reliable web applications that meet the needs of clients. i am  ready to bring my skills and expertise to a new challenging role and work with a team to achieve great results.
                </p>
            </div>
        </motion.div>
    )
}

export default About