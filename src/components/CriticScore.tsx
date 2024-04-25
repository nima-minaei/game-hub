import { Badge } from '@chakra-ui/react'

interface props{
    score: string
}

const CriticScore = ({score} : props) => {
  let color = score > '7500' ? 'green' : score > '5000' ? 'yellow' : 'red';

  return (
    <Badge colorScheme={color} fontSize="12px" paddingX={2}>{score}</Badge>
  )
}

export default CriticScore
