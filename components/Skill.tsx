/* eslint-disable react/jsx-no-undef */
import { motion } from "framer-motion"
import SkillType from "./SkillType"

type Props = {
    directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <>
            {SkillType && SkillType.map((elem) => {
                const { id, image, progress } = elem;
                return(
                    <div className='group relative flex cursor-pointer' key={id}>
                    <motion.img
                        initial={{
                            x:directionLeft ? -200: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src={image}
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-20 xl:h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
                    />
                    <motion.div

                        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full md:w-24 md:h-24 xl:w-20 xl:h-20 z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-3xl font-bold text-black opacity-100'>{progress}%</p>
                        </div>
                    </motion.div>
                </div>
                )
            })}
        </>
    )
}

export default Skill
