import { useEffect, useState } from "react"
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import logo from '@/assets/Logo.png'
import Links from "../Links"
import { SelectedPage } from "../../shared/type"
import useMediaQuery from "../../hooks/useMediaQuery"
import ActionButton from "../../shared/ActionButton"
import { motion } from "framer-motion"
type Props = {
    isTop:boolean,
    
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void
}

const Navbar = ({isTop,selectedPage,setSelectedPage}: Props) => {
    const [toggle,setToggle]=useState<boolean>(false)
    

    const flexbetween="flex items-center justify-between"
    const isAboveMed=useMediaQuery("(min-width: 1060px)")
    console.log(isTop)
    const navbackground=isTop ? "":"bg-red-300 drop-shadow"


  return <nav>
    <div className={ `${navbackground} ${flexbetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexbetween} mx-auto w-5/6`}> 
        <div className={`${flexbetween} w-full gap-16`}>
        <img src={logo} alt="Logo"/>
        <div className={`${flexbetween} w-full`}>
            <div className={` hidden sm:flex ${flexbetween} gap-8 text-sm`}>
                <Links page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Links page="Benefits"
                 selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} />
                <Links page="Our Classes"
                 selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} />
                <Links page="Contact Us"
                 selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} />
                 

            </div>
            <div className={`hidden sm:flex ${flexbetween} gap-8 text-sm`}>
                <p>Sign In</p>
                {/* <button className="p-3 bg-yellow-200 rounded-lg hover:bg-red-600 transition duration-500">Become a Member</button> */}
                <ActionButton setSelectedPage={setSelectedPage} children="Become a Member">

                </ActionButton>
               


            </div>
       
        </div>
        </div>
       
        </div>
       
      
        <Bars3Icon className=" w-9 h-9 text-white mx-auto sm:hidden rounded-full bg-yellow-400 p-2 z-40" onClick={()=>setToggle(!toggle)}  />
        
        
        
    </div>
    {
    !isAboveMed && toggle && ( 
        <>
            <div className="fixed right-0 bottom-0 h-full w-[300px] bg-primary-100 z-50  sm:hidden ">
                <button className="fixed right-0 top-0 z-50 flex justify-end  sm:hidden p-12">
                <XMarkIcon className="w-9 h-8 text-gray-400 z-50 top-0 " onClick={() => setToggle(!toggle)} />
                </button>
                   
                
                <motion.div
                
                  className={`ml-[33%] flex flex-col z-[50] gap-10 text-2xl pt-24 sm:hidden`}>
                    <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Links page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Links page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                
            
            </motion.div>
            </div>

           
        </>
    )
}

  
  </nav>
}

export default Navbar
