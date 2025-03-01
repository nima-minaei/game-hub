import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'


interface Props {
    game: Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src='game.thumbnailUrl' />
        <CardBody>
            <CriticScore score = {game.address.zipcode} />
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
