import React, { useState } from 'react';

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorSwitch';
import { HashLink } from 'react-router-hash-link';

function Nav(props){
  return(
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline'
    />
    <MenuList>
      <MenuItem command='⌘T'>
        New Tab
      </MenuItem>
      <MenuItem command='⌘N'>
        New Window
      </MenuItem>
    </MenuList>
  </Menu>    
  )
}
export default Nav;