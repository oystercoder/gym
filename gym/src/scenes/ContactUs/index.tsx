import React from 'react'
import { SelectedPage } from '../../shared/type'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import contactus from '@/assets/ContactUsPageGraphic.png'
import Heading from '../../shared/Heading'

type Props = {
  setSelectedPage:(value:SelectedPage)=>void
  
}

const index = ({
    setSelectedPage
}: Props) => {
  const {
    register,
    handleSubmit,
    
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit=async(e:any)=>{
    const isValid=await trigger();
    alert("form is submitted")
    if(!isValid)
    {
      e.preventDefault()

    }
    else{

    }

  }
  return (
   <>
   <div id="contactus" className='flex flex-col justify-center items-center pt-24 mx-auto w-5/6 pb-32 md:flex md:flex-row '>
   <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
    <motion.div className='md:w-3/5'
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
      <Heading>
        <span className='text-4xl text-bold text-red-600'>JOIN NOW </span> AND CHANGE YOUR FUTURE
      </Heading>
      <p className='mx-auto my-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ullam porro facilis molestiae perspiciatis explicabo sapiente aperiam dignissimos beatae. Velit sint quasi iusto exercitationem adipisci est veniam, perspiciatis laudantium culpa?
        </p>

    </motion.div>
    <div className='mt-6 justify-between gap-8 md:flex'>
      <motion.div className='mt-10 basis:3/5 md:mt-0'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount:0.5}}
      transition={{duration:0.5}}
      variants={
          {
              hidden:{opacity:0,y:50},
              visible:{opacity:1,x:0}
          }
      }>

<form
            target='_blank'
            onSubmit={onSubmit}
            action="https://formsubmit.co/myemailid.com" // Use handleSubmit
            method="POST"
           
            className='flex flex-col gap-5 items-center mx-10'
        >
            <input
                type="text"
                className='border border-amber-900 p-3 w-full rounded-lg bg-primary-300 px-5 py-3  placeholder:text-white'
                placeholder='NAME'
                {...register("name", { required: true })} // Register the input
            />
            {errors.name && <p className='text-red-600 mt-1'>This field is required.</p>}

            <input
                type="email"
                className='border border-amber-900 p-3 w-full rounded-lg bg-primary-300 px-5 py-3 mx-11 placeholder:text-white'
                placeholder='EMAIL ID'
                {...register("email", { required: true })} // Register the input
            />
            {errors.email && <p className='text-red-600 mt-1'>This field is required.</p>}

            <textarea
                className='border border-amber-900 p-3 w-full rounded-lg bg-primary-300 px-5 py-3 mx-11 placeholder:text-white'
                placeholder='MESSAGE'
                rows={8}
                {...register("message", { required: true })} // Register the textarea
            />
            {errors.message && <p className='text-red-600 mt-1'>This field is required.</p>}

            <button type="submit" className='bg-red-600 p-5 rounded-md'>Send</button>
        </form>
       
      </motion.div>

      <div className="before:absolute before:-top-9 before:content-evolevetext before:-left-20 before:z-[-1] ">
              <img src={contactus} />

            </div>
      

    </div>

   </motion.div>
   {/* <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    variants={
        {
            hidden:{opacity:0,y:50},
            visible:{opacity:1,x:0}
        }
    }
   > */}
    {/* <img className='mt-32' src={contactus} /> */}



   {/* </motion.div> */}
   
   
  
   
   </div>

   

   

   </>
 
  )
}

export default index