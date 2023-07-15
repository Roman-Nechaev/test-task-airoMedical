import { useEffect, useState, useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import PropTypes from 'prop-types';

import { useStore } from '../../store';

import { Bookmark, BookmarkOk } from './FollowingRecipeMarker.styled';

export const FollowingRecipeMarker = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { addToCart, favorites } = useStore(
    ({ addToCart, favorites }) => ({
      addToCart,
      favorites,
    }),
    shallow
  );

  const handleFollowClick = useCallback(() => {
    addToCart(item);
  }, [addToCart, item]);

  useEffect(() => {
    setIsFollowing(favorites.find(i => i.id === item.id));
  }, [item, favorites]);

  return (
    <>
      <div onClick={handleFollowClick}>
        {isFollowing ? <BookmarkOk /> : <Bookmark />}
      </div>
    </>
  );
};

FollowingRecipeMarker.propTypes = {
  item: PropTypes.object,
};
