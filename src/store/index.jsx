import { create } from 'zustand';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers/';

const useStore = create((set, get) => ({
  recipesList: [],
  recipeId: {},
  loading: false,
  error: null,
  currentPage: 1,
  selectedRecipes: [],

  addPage: () => {
    set(state => ({ currentPage: state.currentPage + 1 }));
  },
  updateSelectedRecipes: recipes => {
    set({ selectedRecipes: recipes });
  },
  fetchRecipes: async () => {
    set({ loading: true });
    const { recipesList, currentPage } = get();

    try {
      const response = await axios.get(``, {
        params: {
          page: currentPage,
        },
      });
      const date = response.data;
      const recipes = [...recipesList, ...date];
      set({ recipesList: recipes });

      set({ loading: false });
    } catch (e) {
      set({ error: e });
    } finally {
      set({ loading: false });
    }
  },
  fetchDetails: async id => {
    set({ loading: true });
    try {
      const response = await axios.get(`${id}`);
      set({ recipeId: response.data[0] });
    } catch (e) {
      set({ error: e });
    } finally {
      set({ loading: false });
    }
  },
  deleteToCart: async () => {
    const { recipesList, selectedRecipes } = get();
    const filteredRecipes = recipesList.filter(
      recipe => !selectedRecipes.includes(recipe)
    );
    set({ selectedRecipes: [] });
    if (filteredRecipes.length < 15) {
      set({ recipesList: filteredRecipes });
      set(state => ({ currentPage: state.currentPage + 1 }));
      await get().fetchRecipes();
    } else {
      set({ recipesList: filteredRecipes });
    }
  },
}));

export default useStore;
