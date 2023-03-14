import { ListOfMovies } from '../components/ListOfMovies/ListOfMovies';
import { useEffect, useState } from 'react';
import { getTrending } from '../services/moviesdbAPI';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(resp => setTrendingMovies(resp));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <ListOfMovies movies={trendingMovies} />;
};

export default HomePage;