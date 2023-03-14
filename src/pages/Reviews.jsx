import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/moviesdbAPI';
import { ReviewsList } from 'components/AditInfo/ReviewsList/ReviewsList';

const Reviews = () => {
  const {movieId} = useParams();
  const [movieRev, setMovieRev] = useState([]);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(resp => setMovieRev(resp.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
        {movieRev?.length === 0 ? (<p>We don't have any reviews for this movie yet.</p>) : (<ReviewsList reviews={movieRev}/>)}
    </div>
  )
};

export default Reviews;