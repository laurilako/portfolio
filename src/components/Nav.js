import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Container,
  Image,
  MenuList,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorSwitch';

const Nav = props => {
    const [IsOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!IsOpen);
    
    return(
        <Container maxW={'7x1'}>
            <NavContainer {...props}>
                {/* <Logo w='100px' /> */}
                <ToggleMenu toggle={toggle} isOpen={IsOpen} />
                <MenuLinks isOpen={IsOpen} />
            </NavContainer>
        </Container>
    )
}

const ToggleMenu = ({ toggle, IsOpen }) => {
    return(
        <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
            {IsOpen ? (
                <IconButton>
                    <CloseIcon>
                    </CloseIcon>
                </IconButton>
                ) : (
                <IconButton>
                    <HamburgerIcon>
                    </HamburgerIcon>
                </IconButton>
                )}
        </Box>
    )
}

// const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
//     console.log(to);
//     return (
//       <HashLink smooth to={`${to}`}>
//         <Text display="block" {...rest}>
//           {children}
//         </Text>
//       </HashLink>
//     );
//   };

const MenuLinks = ({ isOpen }) => {
    return (
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {/* <MenuItem to="/#projects">Projects </MenuItem>
          <MenuItem to="/#contact">Contact </MenuItem> */}
          <ColorModeSwitcher />
        </Stack>
      </Box>
    );
};

const NavContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        paddingTop={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        {...props}
      >
        {children}
      </Flex>
    );
  };
  
//   export function Logo(props) {
//     return (
//       <Box {...props}>
//         <HashLink to="/">
//           <Image htmlWidth="47px" htmlHeight="48px" src={LogoImg} alt="Logo" />
//         </HashLink>
//       </Box>
//     );
//   }

export default Nav;