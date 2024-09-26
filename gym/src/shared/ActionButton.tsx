import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './type'

type Props = {
    children:React.ReactNode
    setSelectedPage:(value:SelectedPage)=>void

}

// const ActionButton = ({children,setSelectedPage}: Props) => {
//   return (
//    <AnchorLink className='rounded-md bg-secoundary-500 px-10 py-2 hover:bg-primary-300' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
//     {children}

//    </AnchorLink>
//   )
// }

// export default ActionButton




const ActionButton = ({ children, setSelectedPage }: Props) => {
    const handleClick = () => {
        const targetElement = document.getElementById(SelectedPage.ContactUs);
        if (!targetElement) {
            console.error(`Element with ID "${SelectedPage.ContactUs}" not found.`);
            return;
        }
        setSelectedPage(SelectedPage.ContactUs);
    };

    return (
        <AnchorLink
            className='rounded-md bg-secoundary-500 px-10 py-2 hover:bg-primary-300'
            onClick={handleClick}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};
export default ActionButton;