import { config } from './../config';

export async function searchMovies({ search }) {
    console.log(config);
    try {
        const response = await fetch(`${config.api}?apikey=${config.apiKey}&s=${search}`);
        const json = await response.json();
        const movies = json?.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }));
        return movies;
    } catch (error) {
        throw new Error(error.message);
    }
}