import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { ImgActor, ItemsActor, ListActor } from './Cast.styled';

export const Cast = () => {
  const [MoviesInfoActors, setMoviesInfoActors] = useState([]);
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

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ListActor>
      {MoviesInfoActors.map(MoviesInfoActor => (
        <ItemsActor key={MoviesInfoActor.credit_id}>
          <h3>{MoviesInfoActor.name}</h3>
          <p>Character: {MoviesInfoActor.character}</p>
          {MoviesInfoActor.profile_path && (
            <ImgActor
              src={`${baseUrl}${MoviesInfoActor.profile_path}`}
              alt="{MoviesInfoActor.name}"
            />
          )}
        </ItemsActor>
      ))}
    </ListActor>
  );
};
