import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Layout = lazy(() => import('./components/Layout/Layout'));

import { RecipeDetails } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:detailsId" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
