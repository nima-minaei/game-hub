import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatform';
import { GameQuery } from '../App';


interface Props{
  gameQuery: GameQuery
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({gameQuery }: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const Skeletons = [1,2,3,4,5,6]

  return (
    <>
    {error && <Text>{error}</Text> }
    <SimpleGrid columns={{sm:1 , md:2 ,lg:4}} padding="10px" spacing={5}>
      {isLoading && Skeletons.map(Skeleton => <GameCardContainer key={Skeleton}> <GameCardSkeleton /></GameCardContainer>)} 
        {data.map(game => <GameCardContainer key={game.id}> <GameCard game={game} /></GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
