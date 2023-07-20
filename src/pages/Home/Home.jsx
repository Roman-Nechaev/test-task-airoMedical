import { useCallback, useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

import CommonList from '../../components/CommonList/CommonList';
import { useStore } from '../../store';
import { Container, WrapperList } from './Home.styled';

export const Home = () => {
  const { fetchRecipes, recipesList, loading, addPage } = useStore(
    ({ fetchRecipes, recipesList, loading, addPage }) => ({
      recipesList,
      fetchRecipes,
      loading,
      addPage,
    }),
    shallow
  );

  const [fetching, setFetching] = useState(true);
  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const observer = useRef(null);

  useEffect(() => {
    if (fetching) {
      fetchRecipes();
      setFetching(false);
    }
  }, [fetchRecipes, fetching, loading]);

  const topItem = useCallback(
    node => {
      if (!node) return;
      if (loading) return;
      if (node.currentTarget.scrollTop === 0) {
        setFirstVisibleIndex(prevIndex => prevIndex - 5);
      }
    },
    [loading]
  );

  const lastItem = useCallback(
    node => {
      if (!node) return;
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          if (!fetching) {
            setFirstVisibleIndex(prevIndex => prevIndex + 5);
            addPage();
            setFetching(true);
          }
        }
      });

      observer.current.observe(node);
    },
    [addPage, fetching, loading]
  );

  useEffect(() => {
    const visible = recipesList.slice(
      firstVisibleIndex,
      firstVisibleIndex + 15
    );

    setVisibleRecipes(visible);
  }, [recipesList, firstVisibleIndex]);

  return (
    <Container>
      <WrapperList onScroll={topItem}>
        {visibleRecipes.map(items => (
          <CommonList key={items.id} {...items} />
        ))}
        <div ref={lastItem} style={{ height: '20px' }} />
      </WrapperList>
    </Container>
  );
};
