import React from 'react'

type Props = {
    name:string,
    description?:string,
    image:string
}

const mystyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-pink-300 text-center text-white opacity-0 transition duration-500 hover:opacity-80`;


const Class = ({
    name,
    description,
    image

}: Props) => {
  return (
    <>

  <li className='mx-5 relative inline-block h-[380px] w-[450px]'>
    <div className={mystyles}>
        <p className='text-2xl mt-5'>{name}</p>
        <p>{description}</p>
        

    </div>
    <img src={image} />


  </li>
    </>
  )
}

export default Class