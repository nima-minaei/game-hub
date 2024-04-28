import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useDate'
import { Spinner } from '@chakra-ui/react'

const GenreList = () => {
  
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner />


    return (
        <ul>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
  )
}

export default GenreList
