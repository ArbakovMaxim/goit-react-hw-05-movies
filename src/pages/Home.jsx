import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';

export const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await Api.get(constantsApi.TRENDING_URL);
        if (movies) {
          setMoviesTrend(movies.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {
        <ul>
          {moviesTrend.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
