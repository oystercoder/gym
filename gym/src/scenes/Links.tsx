import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../shared/type'

type Props = {
    page:string,
    selectedPage:string,
    setSelectedPage:(value:SelectedPage)=>void
}


const Links = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
  const lowercasepage=page.toLowerCase().replace(/ /g,'') as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage===lowercasepage? "text-blue-500":""} transition duration-600 hover:text-blue-300`}
    href={`#${lowercasepage}`}
    onClick={()=>setSelectedPage(lowercasepage)}>
        {page}
    </AnchorLink>
  )
}

export default Links