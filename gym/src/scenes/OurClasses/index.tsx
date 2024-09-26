import React from 'react'
import { SelectedPage } from '../../shared/type'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { ClassType } from '../../shared/type'
import Class from './Class'

type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}

const images:Array<ClassType>=[
  {
    name:"Wieght training classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image1
  },
  {
    name:"GYM training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image2
  },
  {
    name:"Power Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image3
  },
  {
    name:"Zumba Dance Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image4
  },
  {
    name:"Yoga Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image5
  },
  {
    name:"Do it Yourself",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.",
    image:image6

  }
]

const index = ({
  setSelectedPage
}: Props) => {
  return (
   <section id="ourclasses" className='w-full py-40 bg-red-300'>
    <motion.div
    onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
    >
     
    
    <motion.div className='mx-auto w-5/6'
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
        <div className='md:w-3/5'>
          <Heading children="OUR CLASS">

          </Heading>
          <p className='mx-auto py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui, odio officia deserunt perferendis nostrum facere explicabo expedita non eligendi ipsum minus quas obcaecati repellat consectetur dolor quasi blanditiis adipisci.
            </p>
          </div>

    </motion.div>
    </motion.div>
    <div className='mt-10 w-full h-[353px] overflow-x-auto gap-9 overflow-y-hidden flex'>
     
     <ul className='w-[2800px] flex whitespace-nowrap'>
      {
        images.map((item:ClassType,index)=>(
         
          <Class key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image}>

          </Class>
          
        ))
      }

   
      </ul>

    </div>

    </section>
  )
}

export default index