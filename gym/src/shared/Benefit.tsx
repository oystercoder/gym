import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './type'
import { motion } from 'framer-motion'

type Props = {
    title:string,
    description:string,
    icon:JSX.Element,
    setSelectedPage:(value:SelectedPage)=>void
}
const childVariants={
    hidden:{
        opacity: 0,
        scale:0.9
    },
    visible:{
        opacity: 1,
        scale:1,
        transition: {
            staggerChildren: 0.2, // Delay between each child's animation
        },
    },
   
}

const Benefit = ({
    icon,
    title,
    description,
    setSelectedPage
}: Props) => {
  return (
    <motion.div className='mt-5 rounded-lg border-2 border-gray-100 px-5 py-16 text-center'
    initial="hidden"
    whileInView={
        "visible"
    }
    viewport={{once:true,amount:0.5}}
    variants={childVariants}>
        
        <div className='mb-4 flex flex-col justify-center items-center gap-10'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
                

            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className='my-3'>
                <p>{description}</p>
            </div>

<AnchorLink className='text-sm font-bold text-primary-200 underline hover:cursor-pointer hover:text-yellow-500' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#$(SelectedPage.ContactUs)`}>
                   <p>
                    Learn More
                    </p>

                  </AnchorLink>

        </div>
        </motion.div>
       
  )
}

export default Benefit