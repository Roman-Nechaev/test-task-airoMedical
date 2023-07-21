import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import PropTypes from 'prop-types';

import useStore from '../../store';

import { Bookmark, BookmarkOk } from './FollowingRecipeMarker.styled';

const FollowingRecipeMarker = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { selectedRecipes } = useStore(
    ({ selectedRecipes }) => ({
      selectedRecipes,
    }),
    shallow
  );

  useEffect(() => {
    setIsFollowing(selectedRecipes.find(i => i.id === item.id));
  }, [item, selectedRecipes]);

  return <div>{isFollowing ? <BookmarkOk /> : <Bookmark />}</div>;
};

FollowingRecipeMarker.propTypes = {
  item: PropTypes.object,
};

export default FollowingRecipeMarker;
