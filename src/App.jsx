import { useState } from 'react';

import { Movies } from './components/Movies';

import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch';

import './App.css';

export function App() {
    const [sort, setSort] = useState(false);
    const { search, setSearch, errorSearch } = useSearch();
    const { movies, getMovies, loading, error } = useMovies({ search, sort });

    const handleOnChange = (event) => setSearch(event.target.value);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        getMovies();
    };

    const handleOnChangeSort = () => setSort(!sort);

    return (
        <>
            <header className='App-header'>
                <h1>Buscador de Películas</h1>
                <form className='App-form' onSubmit={handleOnSubmit}>
                    <input 
                        type='text' 
                        value={search}
                        onChange={handleOnChange}
                        placeholder='Avengers, Spider-Man, Matrix...' 
                    />
                    <input 
                        type='checkbox' 
                        onChange={handleOnChangeSort} 
                        checked={sort} 
                    />
                    <button>Buscar</button>
                </form>
                {errorSearch && <p className='App-error-search'>{errorSearch}</p>}
            </header>
            <main className='App-main'>
                { loading && <p>Cargando...</p> }
                { !loading && error && <p>{error}</p> }
                { !loading && !error && <Movies movies={movies} /> }
            </main>
        </>
    );
}
