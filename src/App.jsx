import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'));

import { RecipeDetails } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="error" element={<ErrorPage />} />
        <Route index element={<Home />} />
        <Route path="recipes/:detailsId" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
