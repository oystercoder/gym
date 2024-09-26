import React from 'react'

type Props = {
    children:React.ReactNode,
}

const Heading = ({children}: Props) => {
  return (
    <h1 className='font-montserrat text-2xl mx-auto w-3/5'>
        {children}

    </h1>
  )
}

export default Heading