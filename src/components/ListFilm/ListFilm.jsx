import {
  ItemFilmStyled,
  ItemLinkFilmStyled,
  ListFilmStyled,
} from './ListFilm.styled';

export const ListFilm = ({ movies, location }) => {
  return (
    <ListFilmStyled>
      {movies.map(({ id, title }) => (
        <ItemFilmStyled key={id}>
          <ItemLinkFilmStyled to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </ItemLinkFilmStyled>
        </ItemFilmStyled>
      ))}
    </ListFilmStyled>
  );
};
