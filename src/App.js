import React, { useState, useEffect, useCallback } from 'react';

import MovieList from './components/Movies/MovieList/MovieList';
import AddMovie from './components/Movies/AddMovie/AddMovie';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://swapi.py4e.com/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      console.log(data.results);
      setMovies(transformedMovies);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = (movie) => {
    console.log(movie);
  };

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}> Fetch Movies </button>
      </section>
      <section> {content} </section>
    </>
  );
};

export default App;
