import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers/';

export const useStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      recipesList: [],
      recipeId: {},
      loading: false,
      error: null,
      currentPage: 1,
      addPage: () => {
        set(state => ({ currentPage: state.currentPage + 1 }));
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
      addToCart: item => {
        const { favorites } = get();

        const itemFilm = favorites.find(i => i.id === item.id);

        const newFavorites = itemFilm
          ? favorites.map(i => (i.id === item.id ? { ...i } : i))
          : [...favorites, { ...item }];
        if (!itemFilm) {
          set({ favorites: newFavorites });
        } else {
          const newFavorites = get().favorites.filter(i => i.id !== item.id);
          set({ favorites: newFavorites });
        }
      },
      clearStorage: () => {
        const { favorites } = get();

        if (favorites) {
          set({ favorites: [] });
        }
      },
      deleteToCart: item => {
        const { recipesList } = get();
        console.log('recipesList', item);
        const itemFilm = recipesList.find(i => i.id === item.id);
        console.log('itemFilm', itemFilm);
        const newFavorites = itemFilm
          ? recipesList.map(i => (i.id === item.id ? { ...i } : i))
          : [...recipesList, { ...item }];
        if (!itemFilm) {
          set({ recipesList: newFavorites });
        } else {
          const newFavorites = get().recipesList.filter(i => i.id !== item.id);
          set({ recipesList: newFavorites });
        }
      },
    }),
    {
      name: 'recipes-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ favorites: state.favorites }),
    }
  )
);
