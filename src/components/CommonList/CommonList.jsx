import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import formattingDescription from '../../utils/formattingDescription';
import { FollowingRecipeMarker } from '../FollowingRecipeMarker/FollowingRecipeMarker';

import { useStore } from '../../store';

import {
  LinkSt,
  ListItem,
  ItemImg,
  Details,
  Title,
  WrapperBtnFollowing,
} from './CommonList.styled';

export const CommonList = item => {
  const { id, name, image_url, description } = item;

  const location = useLocation();

  const { addToCart } = useStore(({ addToCart }) => ({
    addToCart,
  }));

  const onHandleRightClick = useCallback(
    e => {
      e.preventDefault();
      addToCart(item);
    },
    [addToCart, item]
  );

  return (
    <>
      <div onContextMenu={onHandleRightClick}>
        Click My Right Button
        <ListItem key={id}>
          <WrapperBtnFollowing>
            <FollowingRecipeMarker item={item} />
          </WrapperBtnFollowing>
          <LinkSt to={`/details/${id}`} state={{ from: location }}>
            <ItemImg loading="lazy" src={image_url} alt={name} />
            <Details>
              <Title>{name}</Title>

              <p>Description: {formattingDescription(description)}</p>
            </Details>
          </LinkSt>
        </ListItem>
      </div>
    </>
  );
};
