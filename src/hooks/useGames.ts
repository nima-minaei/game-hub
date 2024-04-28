// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useDate";
import { Genre } from "./useGenres";


export interface Game {
    id: number 
    name: string
    thumbnailUrl: string
    address : Address
}
// interface FetchGameResponse {
//     result : Game[]
// }
interface Address {
    zipcode : string
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/users', {params: {genres:selectedGenre?.id }}, [selectedGenre?.id])
//     {
//     const [games, setGames]=useState<Game[]>([]);
//     const [error, setError]=useState('');
//     const [isLoading, setLoading] = useState(false)

//     useEffect(() => {
//         const controller = new AbortController()

//         setLoading(true)
//         apiClient.get<Game[]>('/users', {signal: controller.signal})
//             .then(res => {
//                 setGames(res.data)
//                 setLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message)})
//                 setLoading(false)

//         return () => controller.abort();
//     }, [])
//     return {games , error, isLoading}
// }


export default useGames;