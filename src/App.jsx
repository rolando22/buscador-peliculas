import { Movies } from './components/Movies';

import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch';

import './App.css';


export function App() {
    const { movies } = useMovies();
    const { search, setSearch, errorSearch } = useSearch();

    const handleOnChange = (event) => setSearch(event.target.value);

    return (
        <>
            <header className='App-header'>
                <h1>Buscador de Películas</h1>
                <form className='App-form'>
                    <input 
                        type='text' 
                        value={search}
                        onChange={handleOnChange}
                        placeholder='Avengers, Spider-Man, Matrix...' 
                    />
                    <button>Buscar</button>
                </form>
                {errorSearch && <p className='App-error-search'>{errorSearch}</p>}
            </header>
            <main>
                <Movies movies={movies} />
            </main>
        </>
    );
}
