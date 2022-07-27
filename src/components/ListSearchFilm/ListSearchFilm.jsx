import { Link } from 'react-router-dom';

export const ListSearchFilm = ({ searchMovies, location }) => {
  return (
    <ul>
      {searchMovies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
