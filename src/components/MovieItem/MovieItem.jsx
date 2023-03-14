import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesdbAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import css from './MovieItem.module.css';

export const MovieItem = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const returnBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      getMovieDetails(movieId).then(resp => setMovie(resp));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className={css.container}>
      <Link to={returnBack.current}>
        <button className={css.backButton}>Go back</button>
      </Link>
      <MovieCard movie={movie} />
    </div>
  );
};
