import React, { useState } from 'react';
import MovieList from './components/Movies/MovieList/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch('https://swapi.py4e.com/api/films/');
    const data = await response.json();

    const transformedData = data.results.map((movie) => {
      return {
        id: movie.epoisode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });

    setMovies(transformedData);
    setIsLoading(false);
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}> Fetch Movies </button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p> Found no movies! </p>}
        {isLoading && <p> Loading ... </p>}
      </section>
    </>
  );
};

export default App;
