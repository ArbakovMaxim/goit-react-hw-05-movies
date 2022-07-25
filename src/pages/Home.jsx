import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';

export const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await Api.get(constantsApi.TRENDING_URL);
        if (movies) {
          setMoviesTrend(movies.data.results);
        }
      } catch (error) {
        toast.info(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {
        <ul>
          {moviesTrend.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
      <ToastContainer />
    </div>
  );
};
