import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { Wraper } from './FilmInfo.styled';
import { Btn } from 'components/ua/Btn.styled';
import { MoviesInfo } from 'components/MoviesInfo/MoviesInfo';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

const FilmInfo = () => {
  const { id } = useParams('');
  const [moviesInfo, setMoviesInfo] = useState([]);
  const location = useLocation();
  const [saveLocation, setsaveLocation] = useState('');

  useEffect(() => {
    if (location.state) {
      setsaveLocation(location.state.from);
    }

    const fetchMovies = async () => {
      const movies = await api.getMoviesInfo(id);
      if (movies) {
        setMoviesInfo(movies.data);
      }
    };
    fetchMovies();
  }, [id, location.state]);

  const img = `https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`;

  return (
    <>
      <Btn to={saveLocation}> Back </Btn>
      <Wraper>
        {moviesInfo.poster_path && (
          <>
            <MoviesInfo img={img} moviesInfo={moviesInfo} />
            <AdditionalInformation />
            <Outlet />
          </>
        )}
      </Wraper>
    </>
  );
};

export default FilmInfo;
