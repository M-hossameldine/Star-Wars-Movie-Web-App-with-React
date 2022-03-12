import React from 'react';
import MovieList from './components/Movies/MovieList/MovieList';
import './App.css';
const App = () => {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <>
      <section>
        <button> Fetch Movies </button>
      </section>
      <section>
        <MovieList movies={dummyMovies} />
      </section>
    </>
  );
};

export default App;