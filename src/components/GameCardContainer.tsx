import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface props{
    children: ReactNode;
}
const GameCardContainer = ({children}: props) => {
  return (
    <Box borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer
