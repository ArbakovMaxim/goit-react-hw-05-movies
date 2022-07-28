import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';

export const Reviews = () => {
  const [MoviesInfoAuthors, setMoviesInfoAuthors] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const author = await api.getMoviesReviews(id);
        if (author) {
          setMoviesInfoAuthors(author.data.results);
        }
      } catch (error) {
        toast.info(error);
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
        <ul>
          {MoviesInfoAuthors.map(MoviesInfoAuthor => (
            <li key={MoviesInfoAuthor.id}>
              <h4>Author: {MoviesInfoAuthor.author}</h4>
              <p>{MoviesInfoAuthor.content}</p>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </>
  );
};
