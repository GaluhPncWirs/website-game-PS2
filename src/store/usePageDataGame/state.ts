import type { propsCoverGame } from "@/components/coverGames/content";
import { dataGamesPopular } from "@/data/dataGame/datas";
import { create } from "zustand";

type stateHandlePagination = {
  dataGames: propsCoverGame[][];
  setPaginationDataGame: (
    currentPage: number,
    itemPerPage: number,
    perSections: number,
  ) => void;
};

export const useHandlePagination = create<stateHandlePagination>((set) => ({
  dataGames: [],

  setPaginationDataGame: (currentPage, itemPerPage, perSections) => {
    const paginatedData = dataGamesPopular.slice(
      (currentPage - 1) * itemPerPage,
      currentPage * itemPerPage,
    );
    const chunkedDataGames = [];
    for (let i = 0; i < paginatedData.length; i += perSections) {
      chunkedDataGames.push(paginatedData.slice(i, i + perSections));
    }
    set({ dataGames: chunkedDataGames });
  },
}));
