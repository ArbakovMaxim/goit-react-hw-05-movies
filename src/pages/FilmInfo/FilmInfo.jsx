import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as api from 'services/Api';
import {
  Poster,
  WraperInfo,
  WraperInfoFilm,
  GanresFilm,
  WraperAdditionalInformation,
  Btn,
  Wraper,
  LinkFilmSInfo,
  ListFilmInfo,
} from './FilmInfo.styled';

export const FilmInfo = () => {
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
            <WraperInfo>
              <Poster src={img} alt="" />
              <WraperInfoFilm>
                <h2>{moviesInfo.original_title}</h2>
                <p>Popularity:{moviesInfo.popularity}</p>
                <h3>Overview</h3>
                <p>{moviesInfo.overview}</p>
                <h3>Genres</h3>
                <p>
                  {moviesInfo.genres.map(({ id, name }) => (
                    <GanresFilm key={id}>{name}</GanresFilm>
                  ))}
                </p>
              </WraperInfoFilm>
            </WraperInfo>
            <WraperAdditionalInformation>
              <h3>Additional information</h3>
              <ListFilmInfo>
                <li>
                  <LinkFilmSInfo to="cast">Cast</LinkFilmSInfo>
                </li>
                <li>
                  <LinkFilmSInfo to="reviews">Reviews</LinkFilmSInfo>
                </li>
              </ListFilmInfo>
            </WraperAdditionalInformation>
            <Outlet />
          </>
        )}
      </Wraper>
      <ToastContainer />
    </>
  );
};
