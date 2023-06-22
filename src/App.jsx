import movies from './mocks/okResponse.json';

import './App.css';

export function App() {
    return (
        <>
            <header className='App-header'>
                <h1>Buscador de Péliculas</h1>
                <form className='App-form'>
                    <input type='text' placeholder='Avengers, Spider-Man, Matrix...' />
                    <button>Buscar</button>
                </form>
            </header>
            <main>
                <ul className='App-list'>
                    {movies.Search.map(movie => 
                        <li key={movie.imdbID}>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            <img src={movie.Poster} alt={movie.Title} />
                        </li>
                    )}
                </ul>
            </main>
        </>
    );
}
