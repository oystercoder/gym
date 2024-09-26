import { SelectedPage } from "../../shared/type"
import logo from '@/assets/Logo.png'

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const index = ({
    setSelectedPage
}: Props) => {
  return (
    <footer className='bg-primary-300 py-16'>
        <div className='justify-content w-5/6 gap-16 mx-auto md:flex'>
        <div className="mt-16 md:mt-0 basis:1/2">
        <img src={logo} />
        <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro ipsam velit ducimus optio molestias reprehenderit, sequi nam error debitis dicta sit, ullam dolores consequatur earum deserunt laborum accusamus quo?
        </p>
        <p>@Sushma All Rights Reserved.</p>
        
        </div>
        <div className="mt-16 basis-3/4 md:mt-0">
        <h4 className="font-bold">
            LINKS

        </h4>
        <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cum facere placeat perferendis odio! Facere culpa autem molestias quaerat recusandae earum consectetur reprehenderit, sit possimus fugit tempora iure corporis numquam.

        </p>

        </div>
        <div className="div"></div>

        </div>

    </footer>
  )
}

export default index