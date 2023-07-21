import { useCallback, useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { CommonList, SpinnersLoader } from '../../components';

import useStore from '../../store';

import { Container, DeleteBtn, WrapperList } from './Home.styled';
import ErrorPage from '../Error/ErrorPage';

const Home = () => {
  const {
    fetchRecipes,
    recipesList,
    loading,
    addPage,
    deleteToCart,
    selectedRecipes,
    updateSelectedRecipes,
    error,
  } = useStore(
    ({
      fetchRecipes,
      recipesList,
      loading,
      addPage,
      deleteToCart,
      selectedRecipes,
      updateSelectedRecipes,
      error,
    }) => ({
      recipesList,
      fetchRecipes,
      loading,
      addPage,
      deleteToCart,
      selectedRecipes,
      updateSelectedRecipes,
      error,
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

  const topItem = useCallback(node => {
    if (!node) return;

    if (node.currentTarget.scrollTop === 0) {
      setFirstVisibleIndex(prevIndex => prevIndex - 5);
    }
    return;
  }, []);

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

  const handleFollowClick = useCallback(() => {
    deleteToCart();
  }, [deleteToCart]);

  const handleAddToSelected = useCallback(
    (e, recipe) => {
      e.preventDefault();
      if (selectedRecipes.includes(recipe)) {
        const newSelectedRecipes = selectedRecipes.filter(
          selectedRecipe => selectedRecipe.id !== recipe.id
        );
        updateSelectedRecipes(newSelectedRecipes);
      } else {
        const newSelectedRecipes = [...selectedRecipes, recipe];
        updateSelectedRecipes(newSelectedRecipes);
      }
    },
    [selectedRecipes, updateSelectedRecipes]
  );

  const quantitySelected = selectedRecipes.length;

  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <Container>
          {!!selectedRecipes.length && (
            <DeleteBtn type="button" onClick={handleFollowClick}>
              Delete selected items{<sup>{quantitySelected}</sup>}
            </DeleteBtn>
          )}

          <WrapperList onScroll={topItem}>
            {visibleRecipes.map(items => (
              <CommonList
                key={items.id}
                recipe={items}
                handleAddToSelected={handleAddToSelected}
              />
            ))}
            <div ref={lastItem} style={{ height: '20px' }} />
          </WrapperList>
          {loading && <SpinnersLoader />}
        </Container>
      )}
    </>
  );
};

export default Home;
