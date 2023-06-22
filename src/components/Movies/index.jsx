import './Movies.css';

function ListOfMovies({ movies }) {
    return(
        <ul className='Movies-list'>
            {movies.Search.map(movie => 
                <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                </li>
            )}
        </ul>
    );
}

function NoMovies() {
    return (
        <p>No hay películas para está busqueda</p>
    );
}

export function Movies({ movies }) {
    const hasMovies = movies.Search.length > 0;

    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
