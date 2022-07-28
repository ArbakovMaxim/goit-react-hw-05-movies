import {
  ItemFilmStyled,
  ItemLinkFilmStyled,
  ListFilmStyled,
} from './ListFilm.Styled';

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
