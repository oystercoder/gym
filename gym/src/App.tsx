import { useEffect, useState } from 'react';
import Navbar from "./scenes/Navbar";
import { SelectedPage } from './shared/type';
import Home from './scenes/Home'
import Benefits from './scenes/Benefits'
import OurClasses from './scenes/OurClasses'
import ContactUs from './scenes/ContactUs'
import Footer from './scenes/Footer'

// enum SelectedPage { // Renamed the enum
//  "Home" = "home",
//   Benefits = "benefits",
//   ContactUs = "contactus",
//   OurClasses = "ourclasses"
// }

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTop,setIstop]=useState<boolean>(true)
  useEffect(()=>{
    const handle=()=>{
      if(window.scrollY === 0)
      {
        setIstop(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY!==0)
      {
        console.log("not ")
        setIstop(false)
      }
     
    }
    window.addEventListener("scroll",handle)
    return ()=> window.removeEventListener("scroll",handle)

  },[])

  return (
    <>
      <div className='App bg-gray-20'>
        <Navbar
        isTop={isTop}
          selectedPage={selectedPage} // Use the state variable correctly
          setSelectedPage={setSelectedPage} 
        />
        <Home setSelectedPage={setSelectedPage}  />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} /> 
        <Footer setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
