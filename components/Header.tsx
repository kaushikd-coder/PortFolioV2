import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import { Social } from '../typing'

type Props = {}

export default function Header() {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                {/* {socials && socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                    />

                ))} */}
                <SocialIcon
                    url='https://www.youtube.com'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/kaushik_d1/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/kaushikd-coder'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://twitter.com/Kaushik68863304'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>

                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    url='#contact'
                />

                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    <Link href='#contact'> GET IN TOUCH</Link>
                </p>

            </motion.div>

        </header>
    )
}