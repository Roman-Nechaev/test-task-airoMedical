import { useLocation } from 'react-router-dom';

import {
  LinkSt,
  ListItem,
  ItemImg,
  Details,
  Title,
  WrapperBtnFollowing,
} from './CommonList.styled';

import formattingDescription from '../../utils/formattingDescription';
import { FollowingRecipeMarker } from '../FollowingRecipeMarker/FollowingRecipeMarker';

export const CommonList = item => {
  const { id, name, image_url, description } = item;

  const location = useLocation();

  return (
    <>
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
    </>
  );
};
