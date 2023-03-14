import defaultPoster from '../../services/defaultMoviePoster.png';
import css from './MovieCard.module.css';

export const MovieCard = ({ movie }) => (
  <div className={css.card}>
    <img
    width="200"
      src={
        !movie.poster_path
          ? defaultPoster
          : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      }
      alt={movie.original_title}
    />
    <div className={css.cardInfo}>
      <h1>
        {movie.title}{' '}
        {movie.release_date && (
          <span>({movie.release_date.substring(0, 4)})</span>
        )}
      </h1>
      <p className={css.score}>
        User score: {Math.round(movie.vote_average * 10)}
      </p>
      <h2 className={css.subtitle}>Overview</h2>
      <p className={css.overviewText}>{movie.overview}</p>
      <h3 className={css.genres}>Genres</h3>
      <p className={css.genresText}>
        {movie.genres?.length > 0
          ? movie.genres.map(genre => genre.name).join(', ')
          : 'There is no information about genres'}
      </p>
    </div>
  </div>
);
