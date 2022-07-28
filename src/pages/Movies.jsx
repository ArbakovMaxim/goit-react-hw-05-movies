import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import * as api from 'services/Api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ListFilm } from 'components/ListFilm/ListFilm';

export const Movies = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchUrl = searchParams.get('search') ?? '';

  useEffect(() => {
    searchUrl && fetchMovies(searchUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async searchInput => {
    if (searchInput === '') {
      return;
    }
    const movies = await api.getSearchMovies(searchInput);

    if (movies) {
      setsearchMovies(movies);
    }
    if (movies.length === 0) {
      toast.info(
        'по вашему запросу не чего не найденно,ищите что-то адекватное. '
      );
    }
  };

  const handleSubmit = ({ searchMoviesInput }) => {
    setSearchParams(
      searchMoviesInput !== '' ? { search: searchMoviesInput } : {}
    );
    fetchMovies(searchMoviesInput);
  };

  return (
    <>
      <div>
        <SearchForm submit={handleSubmit} />
      </div>
      <div>
        <ListFilm movies={searchMovies} location={location} />
      </div>
      <ToastContainer />
    </>
  );
};
