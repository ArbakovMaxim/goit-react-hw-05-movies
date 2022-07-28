import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';
import { ListFilm } from 'components/ListFilm/ListFilm';

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
      <ListFilm movies={moviesTrend} location={location} />
      <ToastContainer />
    </div>
  );
};
