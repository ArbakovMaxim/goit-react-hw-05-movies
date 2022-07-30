import { Btn, Img, WraperImg } from './PageNotFound.styled';
import notFound from '../../images/notFound.png';

const PageNotFound = () => {
  return (
    <div>
      <Btn to="/">Go home Yankee</Btn>
      <WraperImg>
        <Img src={notFound} alt="Страница не найдена" />
      </WraperImg>
    </div>
  );
};

export default PageNotFound;
