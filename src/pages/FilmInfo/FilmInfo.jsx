import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';
import {
  Poster,
  WraperInfo,
  WraperInfoFilm,
  GanresFilm,
  WraperAdditionalInformation,
} from './FilmInfo.styled';

export const FilmInfo = () => {
  const { id } = useParams('');
  const [moviesInfo, setMoviesInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await Api.get(`${constantsApi.GET_ONE_MOVIE_URL}/${id}`);
        if (movies) {
          setMoviesInfo(movies.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [id]);

  const img = `https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`;

  return (
    <div>
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
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </WraperAdditionalInformation>
          <Outlet />
        </>
      )}
    </div>
  );
};
