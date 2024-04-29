 import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import usePlatforms from '../hooks/usePlatform'
 
 const PlatformSelector = () => {
    const {data, error} = usePlatforms();

    if (error) return null ;

   return (
    <Menu>
        <MenuButton as={Button}>
            Platforms
        </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id}>{platform.username}</MenuItem>) }
        </MenuList>
    </Menu>
   )
 }
 
 export default PlatformSelector
 