import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from '../../store';

import {
  Container,
  WrapperList,
  Title,
  DeleteAllBtn,
} from './Favorites.styled';
import CommonList from '../../components/CommonList/CommonList';

export const Favorites = () => {
  const { clearStorage, favorites } = useStore(
    ({ clearStorage, favorites }) => ({
      clearStorage,
      favorites,
    }),
    shallow
  );

  const handleFollowClick = useCallback(() => {
    clearStorage();
  }, [clearStorage]);

  return (
    <>
      <Container hasBeenVisible>
        {!!favorites.length && (
          <DeleteAllBtn type="button" onClick={handleFollowClick}>
            Delete all favorites
          </DeleteAllBtn>
        )}

        <>
          {!favorites.length ? (
            <Title>No favorite recipes yet.</Title>
          ) : (
            <WrapperList>
              {favorites.length &&
                favorites.map(items => {
                  return <CommonList key={items.id} ref={null} {...items} />;
                })}
            </WrapperList>
          )}
        </>
      </Container>
    </>
  );
};
