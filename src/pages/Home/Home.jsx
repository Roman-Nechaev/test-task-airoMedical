import { CommonList } from '../../components/CommonList/CommonList';
import { useStore } from '../../store';

import { Container, WrapperList } from './Home.styled';

export const Home = () => {
  const { recipesList } = useStore(({ recipesList }) => ({ recipesList }));

  return (
    <Container>
      <>
        <WrapperList>
          {recipesList.map(item => (
            <CommonList key={item.id} {...item} />
          ))}
        </WrapperList>
      </>
    </Container>
  );
};
