import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number 
    name: string
    thumbnailUrl: string
}
// interface FetchGameResponse {
//     result : Game[]
// }

const useGames = () => {
    const [games, setGames]=useState<Game[]>([]);
    const [error, setError]=useState('');

    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<Game[]>('/users', {signal: controller.signal})
            .then(res => setGames(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)})

        return () => controller.abort();
    }, [])
    return {games , error}
}


export default useGames;