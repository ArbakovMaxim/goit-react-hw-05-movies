import { HeaderBox } from 'components/Header/Header';
import { Main } from 'components/Header/Header.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <HeaderBox />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
};
