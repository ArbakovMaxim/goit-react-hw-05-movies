import {
  LinkFilmSInfo,
  ListFilmInfo,
  WraperAdditionalInformation,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <WraperAdditionalInformation>
      <h3>Additional information</h3>
      <ListFilmInfo>
        <li>
          <LinkFilmSInfo to="cast">Cast</LinkFilmSInfo>
        </li>
        <li>
          <LinkFilmSInfo to="reviews">Reviews</LinkFilmSInfo>
        </li>
      </ListFilmInfo>
    </WraperAdditionalInformation>
  );
};
