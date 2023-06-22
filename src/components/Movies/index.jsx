import './Movies.css';

function ListOfMovies({ movies }) {
    return(
        <ul className='Movies-list'>
            {movies.map(movie => 
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            )}
        </ul>
    );
}

function NoMovies() {
    return (
        <p className='Movies-without-result'>No hay películas para está busqueda</p>
    );
}

export function Movies({ movies }) {
    const hasMovies = movies.length > 0;

    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
