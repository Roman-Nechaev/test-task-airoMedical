import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import {
  LinkSt,
  ListItem,
  ItemImg,
  Details,
  Title,
  BookmarkOk,
  Bookmark,
  WrapperBtnFollowing,
} from './CommonList.styled';
import { useStore } from '../../store';
import formattingDescription from '../../utils/formattingDescription';

export const CommonList = item => {
  const { id, name, image_url, description } = item;

  const location = useLocation();
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
    setIsFollowing(favorites.find(i => i.id === id));
  }, [id, favorites]);
  return (
    <>
      <ListItem key={id}>
        <WrapperBtnFollowing onClick={handleFollowClick}>
          {isFollowing ? <BookmarkOk /> : <Bookmark />}
        </WrapperBtnFollowing>
        <LinkSt to={`/details/${id}`} state={{ from: location }}>
          <ItemImg loading="lazy" src={image_url} alt={name} />
          <Details>
            <Title>{name}</Title>

            <p>Description: {formattingDescription(description)}</p>
          </Details>
        </LinkSt>
      </ListItem>
    </>
  );
};
