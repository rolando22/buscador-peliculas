import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies.service";

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    const getMovies = async () => {
        if (search === previousSearch.current) return;
        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const searchedMovies = await searchMovies({ search });
            setMovies(searchedMovies);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const sortedMovies = useMemo(() => 
        sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    , [sort, movies]);

    return { movies: sortedMovies, getMovies, loading, error };
}