import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

const Navbar = ({onSearch}: Props) => {
  return (
    <div>
      {/* HStack refers to horizental stack  水平布局*/}
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
      </HStack>
    </div>
  )
}

export default Navbar
