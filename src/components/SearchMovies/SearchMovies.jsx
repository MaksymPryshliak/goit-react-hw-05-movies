import { useSearchParams } from 'react-router-dom';
import { ListOfMovies } from 'components/ListOfMovies/ListOfMovies';
import { searchMovies } from 'services/moviesdbAPI';
import { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import { NoFeedback } from './NoFeedback/NoFeedback';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();
  const query = search.get('query') ?? '';

  const handleSubmit = result => {
    setSearch(result !== '' ? { query: result } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovies(query).then(resp => setMovies(resp));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length === 0 && query !== '' && <NoFeedback search={query} />}
      {movies.length !== 0 && <ListOfMovies movies={movies} />}
    </div>
  );
};
