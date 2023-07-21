import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Background, Container } from './Layout.styled';
import { AppBar } from '../../components';

const Layout = () => {
  return (
    <Background>
      <AppBar />

      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </Background>
  );
};

export default Layout;
