import { ListReviewsStyled } from './ListReviews.styled';

export const ListReviews = ({ MoviesInfoAuthors }) => {
  return (
    <ListReviewsStyled>
      {MoviesInfoAuthors.map(MoviesInfoAuthor => (
        <li key={MoviesInfoAuthor.id}>
          <h4>Author: {MoviesInfoAuthor.author}</h4>
          <p>{MoviesInfoAuthor.content}</p>
        </li>
      ))}
    </ListReviewsStyled>
  );
};
