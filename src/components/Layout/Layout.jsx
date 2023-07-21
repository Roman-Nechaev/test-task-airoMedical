import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Background, Container } from './Layout.styled';
import { AppBar, SpinnersLoader } from '../../components';

const Layout = () => {
  return (
    <Background>
      <AppBar />

      <main>
        <Container>
          <Suspense fallback={<SpinnersLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </Background>
  );
};

export default Layout;
