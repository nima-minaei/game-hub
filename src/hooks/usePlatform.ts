import useData from "./useDate"

interface Platform{
    id: number
    name: string
    username: string
}

const usePlatforms = () => useData<Platform>('/users')

export default usePlatforms