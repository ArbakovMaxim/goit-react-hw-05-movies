import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { DebounceInput } from 'react-debounce-input';
import { useEffect, useState } from 'react';
import { constantsApi } from '../services/constans';
import { Api } from 'services/Api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchUrl = searchParams.get('search') ?? '';

  useEffect(() => {
    const getDataMoviesParams = {
      query: inputValue,
      api_key: constantsApi.API_KEY,
    };

    const fetchMovies = async () => {
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
    if (inputValue !== '') {
      fetchMovies();
    }
  }, [inputValue]);

  const cheangeSearcUrl = url => {
    setInputValue(url);
    setSearchParams(url !== '' ? { search: url } : {});
  };

  return (
    <>
      <div>
        <DebounceInput
          value={searchUrl}
          minLength={3}
          type="text"
          debounceTimeout={500}
          onChange={event => cheangeSearcUrl(event.target.value.trim())}
        />
      </div>
      <div>
        {
          <ul>
            {searchMovies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        }
      </div>
      <ToastContainer />
    </>
  );
};
