import { HeaderBox } from 'Layout/Header/Header';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Main } from './Main/Main.styled';

const Layout = () => {
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

export default Layout;
