import { Outlet } from 'react-router-dom';
import { Container } from 'ui/Container.styled';
import { StyledLink, Header, HeaderList } from './Header.styled';

export const HeaderHome = () => {
  return (
    <Container>
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
      <Outlet />
    </Container>
  );
};
