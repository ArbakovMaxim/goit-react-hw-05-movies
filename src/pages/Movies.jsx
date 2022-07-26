import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { constantsApi } from '../services/constans';
import { Api } from 'services/Api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setSearchParams(e.target.value !== '' ? { search: e.target.value } : {});
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={searchUrl} />
          <button onClick={() => fetchMovies()}>Search</button>
        </form>
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
