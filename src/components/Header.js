import { Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaHome, FaTools } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import ColorModeSwitcher from '../ColorSwitch';
import { useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const [display, changeDisplay] = useState('none')
  const darkmode = useColorModeValue(false, true)
  console.log(darkmode)

  return(
    <Flex>
      <Flex
        pos="fixed"
        top="1rem"
        right="1rem">
          <Flex alignItems={"center"} display={['none', 'none', 'flex', 'flex']}>
            <ColorModeSwitcher />
            <HashLink smooth to="/">
              <Button variant="solid" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </HashLink>
            <HashLink smooth to="/projects">
              <Button variant="solid" aria-label="Projects" my={5} w="100%">
                Projects
              </Button>
            </HashLink>
          </Flex>
          <Flex alignItems={"center"} flexDir={'column'} display={['flex', 'flex', 'none', 'none']}>
            <ColorModeSwitcher />
            <HashLink smooth to="/">
              <IconButton      
                mt='2'
                variant="solid"
                size="md"
                fontSize="lg"
                color="current"
                icon={<FaHome />}/>
            </HashLink>
            <HashLink smooth to="/projects">
              <IconButton      
                  mt='2'
                  variant="solid"
                  size="md"
                  fontSize="lg"
                  color="current"
                  icon={<FaTools />}/>
            </HashLink>
            </Flex>
      </Flex>
    </Flex>
  )
}
export default Header