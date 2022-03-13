import React, { useState } from 'react';
import MovieList from './components/Movies/MovieList/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);

    try {
      const response = await fetch('https://swapi.py4e.com/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p> Found no movies! </p>;
  if (isLoading) {
    content = <p> Loading ... </p>;
  }

  if (error) {
    content = <p> {error} </p>;
  }

  if (!isLoading && movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}> Fetch Movies </button>
      </section>
      <section> {content} </section>
    </>
  );
};

export default App;
