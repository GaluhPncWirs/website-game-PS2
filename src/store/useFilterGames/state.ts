import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type filterGames = {
  filterBySearch: dataGamePS2[];
  filterByGenre: dataGamePS2[];
  filterByTag: dataGamePS2[];
  sortBy: dataGamePS2[];
  useHandleSearchGame: (gameList: dataGamePS2) => void;
  useHandleGenreGame: (gameList: dataGamePS2[], genreIsCheked: string) => void;
  useHandleTagGame: (gameList: dataGamePS2[], valueTag: string) => void;
  useHandleSortByGame: (
    gameList: dataGamePS2[],
    sortByValue: string | null,
  ) => void;
};

export const useFilterGames = create<filterGames>((set) => ({
  filterBySearch: [],
  filterByGenre: [],
  filterByTag: [],
  sortBy: [],

  useHandleSearchGame: (gameList) => {
    set({ filterBySearch: [gameList] });
  },

  useHandleGenreGame: (gameList, genreIsCheked) => {
    const filterByGenre = gameList.filter((genreGame) =>
      genreGame.genre.includes(genreIsCheked),
    );
    set({ filterByGenre: filterByGenre });
  },

  useHandleTagGame: (gameList, valueTag) => {
    const filterByTags = gameList.filter((item) =>
      item.cleanTitle.startsWith(valueTag),
    );
    set({ filterByTag: filterByTags });
  },

  useHandleSortByGame: (gameList, sortByValue) => {
    if (sortByValue !== null) {
      if (sortByValue === "topRated") {
        const sortByTopRate = gameList.filter(
          (gameTopRate) => Number(gameTopRate.rating) > 9.0,
        );
        set({ sortBy: sortByTopRate });
      } else if (sortByValue === "newest") {
        const sortByNewest = gameList
          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
          .slice(0, 50);
        set({ sortBy: sortByNewest });
      } else {
        set({ sortBy: gameList });
      }
    } else {
      set({ sortBy: gameList });
    }
  },
}));
