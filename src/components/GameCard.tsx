import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'


interface Props {
    game: Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src='game.thumbnailUrl' />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <CriticScore score = {game.address.zipcode} />
        </CardBody>
    </Card>
  )
}

export default GameCard
