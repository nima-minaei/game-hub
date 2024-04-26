import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import { px } from 'framer-motion'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
