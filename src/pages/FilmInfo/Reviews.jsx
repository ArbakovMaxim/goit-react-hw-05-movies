import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { ListReviews } from 'components/ListReviews/ListReviews';

const Reviews = () => {
  const [MoviesInfoAuthors, setMoviesInfoAuthors] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      const author = await api.getMoviesReviews(id);
      if (author) {
        setMoviesInfoAuthors(author);
      }
    };
    fetchMovies();
  }, [id]);

  return (
    <>
      {MoviesInfoAuthors.length === 0 ? (
        <p>
          {' '}
          'Ни одна живая душа, не вснезошла до описания данного фильма....'
        </p>
      ) : (
        <ListReviews MoviesInfoAuthors={MoviesInfoAuthors} />
      )}
    </>
  );
};

export default Reviews;
