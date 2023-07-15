import { CommonList } from '../../components/CommonList/CommonList';
import { useStore } from '../../store';

import { Container, WrapperList, Title } from './Favorites.styled';

export const Favorites = () => {
  const { favorites } = useStore(({ favorites }) => ({ favorites }));

  return (
    <>
      <Container>
        <>
          {!favorites.length ? (
            <Title>No favorite recipes yet.</Title>
          ) : (
            <WrapperList>
              {favorites.map(item => (
                <CommonList key={item.id} {...item} />
              ))}
            </WrapperList>
          )}
        </>
      </Container>
    </>
  );
};
