import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Layout } from './components/Layout/Layout';

import { useStore } from './store';
import { useEffect } from 'react';

function App() {
  const fetchPopMovie = useStore(state => state.fetchPopMovie);

  useEffect(() => {
    fetchPopMovie();
  }, [fetchPopMovie]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* <Route path="details/:detailsId" element={<RecipeDetails />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
