import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { constantsApi } from '../services/constans';
import { Api } from 'services/Api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ListSearchFilm } from 'components/ListSearchFilm/ListSearchFilm';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Movies = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchUrl = searchParams.get('search') ?? '';

  useEffect(() => {
    searchUrl && fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataMoviesParams = {
    query: searchUrl,
    api_key: constantsApi.API_KEY,
  };

  const fetchMovies = async () => {
    if (searchUrl === '') {
      return;
    }
    try {
      const movies = await Api.get(constantsApi.SEARCH_URL, {
        params: getDataMoviesParams,
      });

      if (movies) {
        setsearchMovies(movies.data.results);
      }
      if (movies.data.results.length === 0) {
        toast.info(
          'по вашему запросу не чего не найденно,ищите что-то адекватное. '
        );
      }
    } catch (error) {
      toast.info(error);
    }
  };

  const handleSubmit = ({ searchMoviesInput }) => {
    setSearchParams(
      searchMoviesInput !== '' ? { search: searchMoviesInput } : {}
    );
    fetchMovies();
  };

  return (
    <>
      <div>
        <SearchForm submit={handleSubmit} />
      </div>
      <div>
        <ListSearchFilm searchMovies={searchMovies} location={location} />
      </div>
      <ToastContainer />
    </>
  );
};
