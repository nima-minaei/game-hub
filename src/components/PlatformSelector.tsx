 import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import usePlatforms, { Platform } from '../hooks/usePlatform'
 

interface Props {
    onSelectPlatform:(platform: Platform) => void
    selectedPlatform:Platform | null
}
 const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms();

    if (error) return null ;

   return (
    <Menu>
        <MenuButton as={Button}>
            {selectedPlatform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.username}</MenuItem>) }
        </MenuList>
    </Menu>
   )
 }
 
 export default PlatformSelector
 