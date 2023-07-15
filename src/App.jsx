import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useStore } from './store';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Favorites } from './pages/Favorites/Favorites';
import { RecipeDetails } from './components/RecipeDetails/RecipeDetails';

function App() {
  const fetchPopMovie = useStore(state => state.fetchPopMovie);

  useEffect(() => {
    fetchPopMovie();
  }, [fetchPopMovie]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="details/:detailsId" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
