import React, { useState } from 'react';
import MovieList from './components/Movies/MovieList/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.py4e.com/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movie) => {
          return {
            id: movie.epoisode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        console.log(transformedData);
        setMovies(transformedData);
      });
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}> Fetch Movies </button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </>
  );
};

export default App;
