import { Loader } from './Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AditInfo } from 'components/AditInfo/AditInfo';
import { MovieItem } from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  return (
    <>
      <MovieItem />
      <AditInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
