/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const ExperienceCard = () => {
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
                src="../is.jpeg" alt="prp" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>FullStack Developer</h4>
                <p className='font-bold text-2xl mt-1'>iSimplexity</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used */}

                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/f84jpum9/production/cf93cae8ecf1ef7cbe3cf24b0973c66a73fb8aeb-587x330.png?w=2000&fit=max&auto=format"
                        alt="prp"
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/f84jpum9/production/d488cc19327ae22780a2f12d7531c159327fe99a-1200x630.jpg?w=2000&fit=max&auto=format"
                        alt="prp"
                    />
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
                    Monday Aug 01 2022 - Friday Dec 03 2022
                </p>
                <ul className='list-disc space-y-4 ml-5 text-sm max-h-40 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                    <li>Integrating Mixpanel involves adding a small snippet of JavaScript code to your website or mobile app.
The code sends data to Mixpanel servers, which can be used to create reports and visualizations about user behavior.
Mixpanel also provides APIs and libraries for different programming languages, allowing for direct data sending from the server and advanced analytics.</li>
                    <li>Create a plan for integrating the vendor's products or services into our applications.Set up a system for monitoring and evaluating the vendor's performance to ensure they are meeting the agreed-upon terms and conditions.</li>
                    <li>Add the Auth0 client library to our application, which will handle the communication between our application and Auth0.Implemented the login method in our application, which redirects the user to the Auth0 login page.</li>
                    <li>Create a payment form in our application, where customers can enter their credit card information.Use Stripe's APIs to create a token for the credit card information entered by the customer.Send the token and any other relevant information, such as the amount of the purchase, to our server.Use Stripe's APIs on our server to create a charge, which processes the payment and charges the customer's credit card.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
