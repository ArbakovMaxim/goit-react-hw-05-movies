import { CastInfo } from 'components/CastInfo/CastInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';

const Cast = () => {
  const [moviesInfoActors, setMoviesInfoActors] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      const actor = await api.getMoviesCast(id);
      if (actor) {
        setMoviesInfoActors(actor);
      }
    };
    fetchMovies();
  }, [id]);

  return <CastInfo moviesInfoActors={moviesInfoActors} />;
};

export default Cast;
