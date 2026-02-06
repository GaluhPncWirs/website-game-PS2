import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type filterGames = {
  filterBySearch: dataGamePS2[];
  filterByGenre: dataGamePS2[];
  filterByTag: dataGamePS2[];
  useHandleSearchGame: (gameList: dataGamePS2) => void;
  useHandleGenreGame: (gameList: dataGamePS2[], genreIsCheked: string) => void;
  useHandleTagGame: (gameList: dataGamePS2[], valueTag: string) => void;
};

export const useFilterGames = create<filterGames>((set) => ({
  filterBySearch: [],
  filterByGenre: [],
  filterByTag: [],

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
}));
