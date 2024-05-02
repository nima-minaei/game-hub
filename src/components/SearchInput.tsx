import { Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement />
      <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
  )
}

export default SearchInput
