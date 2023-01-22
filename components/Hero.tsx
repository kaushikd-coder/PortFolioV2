import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../public/kd.jpg'
// import { PageInfo } from '../typing'
// import { urlFor } from '../sanity'

type Props = {}

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's Kaushik Das`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto'
                src={profile} alt='prp' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                   software engineer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                    {/* <Link href="#contact">
                        <button className='heroButton'>Contact</button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Hero;