import { ImgActor, ItemsActor, ListActor } from './CastInfo.styled';

export const CastInfo = ({ moviesInfoActors }) => {
  return (
    <ListActor>
      {moviesInfoActors.map(moviesInfoActor => (
        <ItemsActor key={moviesInfoActor.credit_id}>
          <h3>{moviesInfoActor.name}</h3>
          <p>Character: {moviesInfoActor.character}</p>
          {moviesInfoActor.profile_path && (
            <ImgActor
              src={`https://image.tmdb.org/t/p/w500/${moviesInfoActor.profile_path}`}
              alt={moviesInfoActor.name}
            />
          )}
        </ItemsActor>
      ))}
    </ListActor>
  );
};
