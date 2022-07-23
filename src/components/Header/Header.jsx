import { Outlet } from 'react-router-dom';
import { Container } from 'ui/Container.styled';
import { StyledLink, Header } from './Header.styled';

export const HeaderHome = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
