import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type filterGames = {
  allGames: dataGamePS2[];
  filteredGames: dataGamePS2[];
  searchQuery: string;
  selectedGenre: dataGamePS2[] | null;
  sort: string | null;
  disabledFilter: string | null;
  setGames: (games: dataGamePS2) => void;
  useHandleSearchGame: (query: string) => void;
  useHandleGenreGame: (valueGenre: any) => void;
  useHandleTagGame: (valueTag: string) => void;
  useHandleSortByGame: (sortBy: string) => void;
  resetFilter: (
    activeFilters: "search" | "genre" | "tags" | "sort" | null,
  ) => void;
};

export const useFilterGames = create<filterGames>((set) => ({
  allGames: [],
  filteredGames: [],

  searchQuery: "",
  selectedGenre: null,
  selectedTag: null,
  sort: null,

  disabledFilter: null,

  setGames: (games) => set({ allGames: games, filteredGames: games }),

  useHandleSearchGame: (query) =>
    set((state) => {
      const filtered = state.allGames.filter((game) =>
        game.cleanTitle?.toLowerCase().includes(query),
      );
      return {
        searchQuery: query,
        filteredGames: filtered,
      };
    }),

  useHandleGenreGame: (valueGenre) => {
    set((state) => {
      const filtered = state.allGames.filter((game) =>
        game.genre.includes(valueGenre),
      );
      return {
        selectedGenre: valueGenre,
        filteredGames: filtered,
      };
    });
  },

  useHandleTagGame: (valueTag) => {
    set((state) => {
      const filterByTags = state.allGames.filter((game) =>
        game.cleanTitle.startsWith(valueTag),
      );
      return {
        selectedTag: valueTag,
        filteredGames: filterByTags,
      };
    });
  },

  useHandleSortByGame: (sortBy) => {
    set((state) => {
      if (sortBy === "topRated") {
        const sortByTopRate = state.allGames.filter(
          (gameTopRate) => Number(gameTopRate.rating) > 9.0,
        );
        return {
          sort: sortBy,
          filteredGames: sortByTopRate,
        };
      } else if (sortBy === "newest") {
        const sortByNewest = state.allGames
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .slice(0, 50);
        return {
          sort: sortBy,
          filteredGames: sortByNewest,
        };
      } else {
        return {
          filteredGames: state.allGames,
        };
      }
    });
  },

  resetFilter: (activeFilter) => {
    set((state) => ({
      searchQuery: "",
      selectedGenre: null,
      selectedTag: null,
      sort: null,
      filteredGames: state.allGames,
      disabledFilter: activeFilter,
    }));
  },
}));
