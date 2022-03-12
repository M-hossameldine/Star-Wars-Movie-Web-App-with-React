import Movie from '../MovieItem/MovieItem';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movie-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={`movie${movie.id}`}
          title={movie.title}
          openingText={movie.openingText}
          releaseText={movie.releaseText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
