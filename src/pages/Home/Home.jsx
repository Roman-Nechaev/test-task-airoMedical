import { useCallback, useEffect, useRef, useState } from 'react';

import CommonList from '../../components/CommonList/CommonList';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';

import { Container, WrapperList } from './Home.styled';

export const Home = () => {
  const { fetchRecipes, recipesList, loading } = useStore(
    ({ fetchRecipes, recipesList, loading }) => ({
      recipesList,
      fetchRecipes,
      loading,
    }),
    shallow
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [fetching, setFetching] = useState(true);

  const observer = useRef(null);

  useEffect(() => {
    if (fetching) {
      setFetching(false);
      fetchRecipes(currentPage);
    }
  }, [fetchRecipes, fetching, currentPage]);

  const lastItem = useCallback(
    node => {
      if (!node) return;
      if (loading) return;
      observer;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setCurrentPage(prevState => prevState + 1);
          setFetching(true);
        }
      });
      observer.current.observe(node);
    },
    [loading]
  );

  return (
    <Container>
      <WrapperList>
        {recipesList.length &&
          recipesList.map((items, index) => {
            return (
              <CommonList
                key={items.id}
                ref={index === recipesList.length - 1 ? lastItem : null}
                items={items}
              />
            );
          })}
      </WrapperList>
    </Container>
  );
};
