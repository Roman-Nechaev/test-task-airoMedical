import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  Container,
} from './CommonList.styled';

// eslint-disable-next-line react/display-name
const CommonList = items => {
  const location = useLocation();

  const { id, name, image_url, description } = items;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart, deleteToCart } = useStore(
    ({ addToCart, deleteToCart }) => ({
      addToCart,
      deleteToCart,
    })
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onHandleRightClick = useCallback(
    e => {
      e.preventDefault();
      addToCart(items);
      deleteToCart(items);
    },
    [addToCart, deleteToCart, items]
  );

  return (
    <Container>
      <ListItem key={id} onContextMenu={onHandleRightClick}>
        <WrapperBtnFollowing>
          <FollowingRecipeMarker item={items} />
        </WrapperBtnFollowing>
        <LinkSt to={`/details/${id}`} state={{ from: location }}>
          <ItemImg loading="lazy" src={image_url} alt={name} />
          <p>{id}</p>
          <Details>
            <Title>{name}</Title>

            <p>Description: {formattingDescription(description)}</p>
          </Details>
        </LinkSt>
      </ListItem>
    </Container>
  );
};

export default CommonList;

CommonList.propTypes = {
  items: PropTypes.object,
};
