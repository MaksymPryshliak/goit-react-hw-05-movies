import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesdbAPI';
import { CastList } from 'components/AditInfo/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    try {
      getMovieCredits(movieId).then(resp =>
        setMovieCast(resp.cast.splice(0, 8))
      );
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {movieCast?.length === 0 ? (
        `We don't have any information about cast for this movie`
      ) : (
        <CastList cast={movieCast} />
      )}
    </>
  );
};

export default Cast;
