import type { propsCoverGame } from "@/components/coverGames/content";
import { dataGamesPopular } from "@/data/dataGame/datas";
import { create } from "zustand";

type stateHandlePagination = {
  dataGames: propsCoverGame[][];
  setPaginationDataGame: (currentPage: number, itemPerPage: number) => void;
};

export const useHandlePagination = create<stateHandlePagination>((set) => ({
  dataGames: [],

  setPaginationDataGame: (currentPage, itemPerPage) => {
    const paginatedData = dataGamesPopular.slice(
      (currentPage - 1) * itemPerPage,
      currentPage * itemPerPage,
    );
    const chunkedDataGames = [];
    for (let i = 0; i < dataGamesPopular.length; i += 3) {
      chunkedDataGames.push(paginatedData.slice(i, i + 3));
    }
    set({ dataGames: chunkedDataGames });
  },
}));
