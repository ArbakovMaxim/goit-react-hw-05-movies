import { Header, HeaderList, StyledLink } from './Header.styled';

export const HeaderBox = () => {
  return (
    <Header>
      <nav>
        <HeaderList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </HeaderList>
      </nav>
    </Header>
  );
};
