import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import formattingDescription from '../../utils/formattingDescription';
import { FollowingRecipeMarker } from '../../components';

import {
  LinkSt,
  ListItem,
  ItemImg,
  Details,
  Title,
  WrapperBtnFollowing,
  Container,
} from './CommonList.styled';

const CommonList = ({ recipe, handleAddToSelected }) => {
  const location = useLocation();

  const { id, name, image_url, description } = recipe;

  return (
    <Container onContextMenu={e => handleAddToSelected(e, recipe)}>
      <ListItem key={id}>
        <WrapperBtnFollowing>
          <FollowingRecipeMarker item={recipe} />
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

CommonList.propTypes = {
  recipe: PropTypes.object,
  handleAddToSelected: PropTypes.func,
};

export default CommonList;
