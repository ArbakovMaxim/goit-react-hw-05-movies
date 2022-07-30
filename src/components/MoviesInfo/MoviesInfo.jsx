import {
  GanresFilm,
  Poster,
  WraperInfo,
  WraperInfoFilm,
} from './MoviesInfo.styled';

export const MoviesInfo = ({ moviesInfo, img }) => {
  return (
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
  );
};
