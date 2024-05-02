import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button}>
            order by: Relevance
        </MenuButton>
        <MenuList>
            <MenuItem>Relavance</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector
