const API = 'https://www.omdbapi.com/';
const API_KEY = 'a73fbff2';

export async function searchMovies({ search }) {
    try {
        const response = await fetch(`${API}?apikey=${API_KEY}&s=${search}`);
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