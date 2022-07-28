import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from 'services/Api';
import { ListFilm } from 'components/ListFilm/ListFilm';

export const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await api.getMoviesTrending();
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
