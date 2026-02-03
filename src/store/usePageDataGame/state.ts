import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type stateHandlePagination = {
  dataGames: dataGamePS2[][];
  setPaginationDataGame: (
    dataGamesPS2: dataGamePS2[],
    currentPage: number,
    itemPerPage: number,
    perSections: number,
  ) => void;
};

export const useHandlePagination = create<stateHandlePagination>((set) => ({
  dataGames: [],

  setPaginationDataGame: (
    dataGamesPS2,
    currentPage,
    itemPerPage,
    perSections,
  ) => {
    const paginatedData = dataGamesPS2.slice(
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
