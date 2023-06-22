import { Movies } from './components/Movies';

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
                <Movies movies={movies} />
            </main>
        </>
    );
}
