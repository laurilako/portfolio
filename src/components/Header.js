import { Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaHome, FaTools } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import ColorModeSwitcher from '../ColorSwitch';
import { useColorModeValue } from '@chakra-ui/react';
import Headroom from 'react-headroom'

const Header = () => {
  const [display, changeDisplay] = useState('none')
  const darkmode = useColorModeValue(false, true)
  console.log(darkmode)

  return(
    <Headroom>
      <Flex justifyContent={"center"}>
        <Flex>
            <Flex alignItems={"center"} display={['none', 'none', 'flex', 'flex']}>
              <ColorModeSwitcher />
              <HashLink smooth to="/">
                <Button variant="solid" aria-label="Home" mx={2} my={5} w="100%">
                  Home
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