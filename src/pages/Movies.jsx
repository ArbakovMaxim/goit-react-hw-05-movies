import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Api } from 'services/Api';

export const Movies = () => {
  const { id } = useParams();
  const [moviesInfo, setMoviesInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await Api.get(id);
        if (movies) {
          setMoviesInfo(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [id]);

  return (
    <div>
      <img src={`${moviesInfo.backdrop_path}`} alt={`${moviesInfo.title}`} />
      <Outlet />
    </div>
  );
};
