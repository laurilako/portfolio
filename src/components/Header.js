import { Flex, Button, IconButton } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import ColorModeSwitcher from '../ColorSwitch';
import Headroom from 'react-headroom'

const Header = () => {
  // const darkmode = useColorModeValue(false, true)
  return(
    <Headroom>
      <Flex justifyContent={"center"}>
        <Flex>
            <Flex alignItems={"center"} display={['none', 'none', 'flex', 'flex']}>
              <ColorModeSwitcher />
              <HashLink smooth to="/portfolio/">
                <Button variant="solid" aria-label="Home" mx={2} my={5} w="100%">
                  HOME
                </Button>
              </HashLink>
            </Flex>

            <Flex position="sticky" alignItems={"center"} flexDir={'row'} display={['flex', 'flex', 'none', 'none']}>
              <ColorModeSwitcher mt={2}/>
              <HashLink smooth to="/">
                <IconButton      
                  mt='2'
                  variant="solid"
                  size="md"
                  fontSize="lg"
                  color="current"
                  icon={<FaHome />}/>
              </HashLink>
              </Flex>
        </Flex>
      </Flex>
    </Headroom>
  )
}
export default Header