import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from 'services/Api';
import { ListFilm } from 'components/ListFilm/ListFilm';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await api.getMoviesTrending();
      if (movies) {
        setMoviesTrend(movies);
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

export default Home;
