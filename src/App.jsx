import { Movies } from './components/Movies';

import { useMovies } from './hooks/useMovies.js';

import './App.css';


export function App() {
    const { movies } = useMovies();

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
                <Movies movies={movies} />
            </main>
        </>
    );
}
