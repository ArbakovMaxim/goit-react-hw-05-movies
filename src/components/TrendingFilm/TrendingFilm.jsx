import { Link } from 'react-router-dom';

export const TrendingFilm = ({ moviesTrend, location }) => {
  return (
    <ul>
      {moviesTrend.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
