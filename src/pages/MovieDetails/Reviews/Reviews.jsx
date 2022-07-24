import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from 'services/Api';
import { constantsApi } from 'services/constans';

export const Reviews = () => {
  const [MoviesInfoAuthors, setMoviesInfoAuthors] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const author = await Api.get(
          `movie/${id}/${constantsApi.MOVIE_REVIEWS_URL}`
        );
        if (author) {
          setMoviesInfoAuthors(author.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [id]);

  return (
    <ul>
      {MoviesInfoAuthors.map(MoviesInfoAuthor => (
        <li key={MoviesInfoAuthor.id}>
          <h4>Author: {MoviesInfoAuthor.author}</h4>
          <p>{MoviesInfoAuthor.content}</p>
        </li>
      ))}
    </ul>
  );
};
