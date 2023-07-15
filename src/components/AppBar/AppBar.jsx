import { shallow } from 'zustand/shallow';

import { useStore } from '../../store';
import { Header, NavLinks, NavigateList } from './AppBar.styled';

export const AppBar = () => {
  const { favorites } = useStore(
    ({ favorites }) => ({
      favorites,
    }),
    shallow
  );

  const quantityFavorite = favorites.length;

  return (
    <Header>
      <>
        {/* <Link to="/">
            <LogoImg src={} alt="Logo" />
          </Link> */}
        <NavigateList>
          <NavLinks to="/">Recipe list</NavLinks>

          <NavLinks to="/favorites">
            Favorites{!!quantityFavorite && <sup>{quantityFavorite}</sup>}
          </NavLinks>
        </NavigateList>
      </>
    </Header>
  );
};
