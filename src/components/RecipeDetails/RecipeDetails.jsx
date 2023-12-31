import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import useStore from '../../store';

import { IngredientsTable } from '../../components';

import {
  DetailImg,
  ImgWrapper,
  LinkBack,
  WrapperCards,
  WrapperInfo,
  Title,
  Desc,
  Tips,
  FirstBrewed,
} from './RecipeDetails.styled';

const RecipeDetails = () => {
  const { detailsId } = useParams();
  const location = useLocation();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/');

  const { fetchDetails, recipeId, loading } = useStore(
    ({ fetchDetails, recipeId, loading }) => ({
      fetchDetails,
      recipeId,
      loading,
    }),
    shallow
  );

  useEffect(() => {
    fetchDetails(detailsId);
  }, [detailsId, fetchDetails]);

  const {
    name,
    image_url,
    brewers_tips,
    description,
    ingredients,
    first_brewed,
  } = recipeId;

  return (
    <WrapperCards>
      <LinkBack to={beckLinkLocationRef.current}>Go BACK</LinkBack>
      {!loading && ingredients && (
        <>
          <ImgWrapper>
            <DetailImg loading="lazy" src={image_url} alt={name} />
          </ImgWrapper>
          <WrapperInfo>
            <Title>{name}</Title>
            <FirstBrewed>First brewed: {first_brewed}</FirstBrewed>
            <Desc>{description}</Desc>

            <Tips>
              Brewers Tips: <span>{brewers_tips}</span>
            </Tips>

            <IngredientsTable ingredients={ingredients} />
          </WrapperInfo>
        </>
      )}
    </WrapperCards>
  );
};

export default RecipeDetails;
