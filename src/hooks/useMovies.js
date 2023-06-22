import responseMovies from './../mocks/okResponse.json';

export function useMovies() {

    const moviesMapped = responseMovies.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
    }));

    return { movies: moviesMapped };
}