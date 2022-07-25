import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';
import { ImgActor, ItemsActor, ListActor } from './Cast.styled';

export const Cast = () => {
  const [MoviesInfoActors, setMoviesInfoActors] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const actor = await Api.get(
          `movie/${id}/${constantsApi.MOVIE_ACTOR_URL}`
        );
        if (actor) {
          setMoviesInfoActors(actor.data.cast);
        }
      } catch (error) {
        console.log(error);
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
