import React from 'react'
import { SelectedPage } from "../../shared/type"
import useMediaQuery from '../../hooks/useMediaQuery'
import ActionButton from '../../shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponserRedBull from '@/assets/SponsorRedBull.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    children:React.ReactNode
    setSelectedPage:(value:SelectedPage)=>void
    
}

const index = ({children,setSelectedPage}: Props) => {
    const isAboveMed=useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home" className='gap-16 pb-10 bg-gray-20 pt-10 md:h-full md:pb-0'>
        <motion.div className='flex flex-col justify-center md:flex md:flex-row w-5/6 mx-auto items-center'
        onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
            {/* //header */}
            <div className='mt-32 z-10 md:basis-3/5'>
                <motion.div className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={
                    {
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }
                }>
                   
                    <div className='relative'>
                        <div className='before:absolute md:before:-top-20 md:before:content-evolevetext md:before:-left-20 before:z-[-1] '>
                            <img src={HomePageText} alt="this is it" />
                        </div>
                        
                        </div>
                        <p className='mt-8 text-sm md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci debitis nesciunt repudiandae cupiditate alias deserunt minima veniam mollitia, expedita consectetur soluta numquam accusamus necessitatibus consequatur. Animi officia nisi reiciendis?</p>

                </motion.div>
                <motion.div className=' flex justify-center items-center  gap-11 md:gap-40 mt-10 md:h-5/6'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true,amount:0.5}}
                 transition={{delay:0.5,duration:0.5}}
                 variants={
                     {
                         hidden:{opacity:0,x:-50},
                         visible:{opacity:1,x:0}
                     }
                    }
                >
                   <ActionButton setSelectedPage ={setSelectedPage } children="Join Now">

                   </ActionButton>
                   <AnchorLink 
    className='text-sm font-bold text-primary-200 underline hover:cursor-pointer hover:text-yellow-500' 
    onClick={() => setSelectedPage(SelectedPage.ContactUs)} 
    href={`#${SelectedPage.ContactUs}`} // Fixed string interpolation
>
    <p>Learn More</p>
</AnchorLink>

                    </motion.div>
            </div>
            {/* //image */}
            <motion.div className='basis-3/5 justify-center items-center md:z-10 md:ml-40 md:mt-16 justify-items-end'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={
                {
                    hidden:{opacity:0,x:50},
                    visible:{opacity:1,x:0}
                }
               }>
                <img src={HomePageGraphic} alt="text" />
                

            </motion.div>
        </motion.div>
        {/* sponsers */}
       {
        isAboveMed &&(
            <motion.div className='h-[60px] w-full bg-pink-300'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,}}
            animate={{ x: 100 }}
            transition={{delay:0.5,duration:0.5}}
            variants={
                {
                    hidden:{opacity:0,x:50},
                    visible:{opacity:1,x:0}
                }
               }>
                <div className='mx-auto  w-5/6'>
                    <div className='flex items-center justify-between gap-8' >
                        <img src={SponserRedBull} alt="text" />
                        <img src={SponsorFortune} alt="text" />
                        <img src={SponsorForbes} alt="text" />
                    </div>
                </div>
                </motion.div>
        )
    }


        </section>
  )
}

export default index