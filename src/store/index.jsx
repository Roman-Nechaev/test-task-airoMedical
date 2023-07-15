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
      fetchPopMovie: async () => {
        set({ loading: true });
        try {
          const response = await axios.get('', {
            params: {
              page: 1,
              per_page: 15,
            },
          });

          set({ recipesList: response.data });
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
    }),
    {
      name: 'recipes-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ favorites: state.favorites }),
    }
  )
);
