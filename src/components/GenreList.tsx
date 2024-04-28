import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useDate'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'

interface Props{
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre} : Props) => {
  
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner />


    return (
        <List>
            {data.map(genre => <ListItem key={genre.id} padding='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={80} /*src={getCroppedImageUrl()}*/ />
                    <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
                </ListItem>)}
        </List>
  )
}

export default GenreList
 