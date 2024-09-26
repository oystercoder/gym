import { HomeModernIcon } from "@heroicons/react/24/solid"
import {UserGroupIcon} from "@heroicons/react/24/solid"
import {AcademicCapIcon} from "@heroicons/react/24/solid"
import { BenfitType, SelectedPage } from "../../shared/type"
import { motion } from "framer-motion"
import Heading from "../../shared/Heading"
import { BiEnvelopeOpen } from "react-icons/bi"
import Benefit from "../../shared/Benefit"
import bene from '@/assets/BenefitsPageGraphic.png'
import ActionButton from "../../shared/ActionButton"

type Props = {
  children:React.ReactNode,
  setSelectedPage:(value:SelectedPage)=>void

}
const container={
  hidden:{
      opacity: 0
  },
  visible:{
      opacity: 1,
      transition: {
          staggerChildren: 0.2, // Delay between each child's animation
      },
  },
 
}
const index = ({
  children,
  setSelectedPage
  
}: Props) => {
  const benefits:Array<BenfitType>=[
    {
      icon:<HomeModernIcon className="h-6 w-6"  />,
      title:"Easy to use",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
    },
    {
      icon:<UserGroupIcon className="h-6 w-6 " />,
      title:"Friendly environment",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
    },
    {
      icon:<AcademicCapIcon className="h-6 w-6 " />,
      title:"Great circle",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
    }
  ]
  return (
    <section id="benefits" className="min-h-full mx-auto   w-5/6 py-10">
      <motion.div 
       initial="hidden"
       whileInView={
           "visible"
       }
       viewport={{once:true,amount:0.5}}
       variants={container}
      
         onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
         >
          <div className="md:my-5  text-center w-full">
          <Heading children="Do join as soon as possible">

          </Heading>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolorem aperiam animi modi eveniet deleniti facere, unde debitis, aliquid ad sit ducimus hic quis est voluptate pariatur impedit temporibus et.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
          {
    benefits.map((benefit) => (
        <Benefit 
            key={benefit.title}  // Ensure title is unique; consider using an ID instead
            icon={benefit.icon}
            description={benefit.description}
            title={benefit.title}
            setSelectedPage={setSelectedPage}
        />
    ))
}



          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center gap-6">
            <div className="relative">
           
            <div className="before:absolute before:-top-9 before:content-Abstract before:-left-20 before:z-[-1] ">
              <img src={bene} />

            </div>
            </div>
            <div>
            
              <h1 className="font-bold text-2xl">
                Millions are <span className="text-yellow-500 text-4xl">Happy</span>

              </h1>
              <div className="relative">
              <p className="before:absolute before:top-20 md:before:content-sparkles md:before:-right-10 before:z-[-1]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid exercitationem ullam eligendi optio similique deleniti tempore rerum unde, esse perspiciatis enim magnam commodi voluptatum obcaecati incidunt facere aperiam, itaque alias!
              </p>
              </div>
              </div>
             
              
              

            </div>
            <button className="bg-yellow-400 p-6 flex mx-auto text-center items-center rounded-md mt-7">
              <ActionButton setSelectedPage={setSelectedPage} children="Join Now">

                

              </ActionButton>
               
              </button>
           
         

     
      </motion.div>


    </section>
  )
}

export default index