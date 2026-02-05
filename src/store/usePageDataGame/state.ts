import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type stateHandlePagination = {
  dataGamesPopular: dataGamePS2[][];
  dataListGames: dataGamePS2[][];
  // dataAllGame: dataGamePS2[][];
  setPaginationDataGamePopular: (
    dataGamesPS2: dataGamePS2[],
    currentPage: number,
    itemPerPage: number,
  ) => void;
  setPaginationDataListGame: (
    dataGamesPS2: dataGamePS2[],
    currentPage: number,
    itemPerPage: number,
    perSections: number,
  ) => void;
};

function paginatedData(
  dataGamesPS2: dataGamePS2[],
  currentPage: number,
  itemPerPage: number,
) {
  return dataGamesPS2.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage,
  );
}

export const useHandlePagination = create<stateHandlePagination>((set) => ({
  dataGamesPopular: [],
  dataListGames: [],

  setPaginationDataGamePopular: (dataGamesPS2, currentPage, itemPerPage) => {
    const pageData = paginatedData(dataGamesPS2, currentPage, itemPerPage);
    const chunkedDataGames = [];
    for (let i = 0; i < paginatedData.length; i += 4) {
      chunkedDataGames.push(pageData.slice(i, i + 4));
    }
    set({ dataGamesPopular: chunkedDataGames });
  },

  setPaginationDataListGame: (
    dataGamesPS2,
    currentPage,
    itemPerPage,
    perSections,
  ) => {
    const pageData = paginatedData(dataGamesPS2, currentPage, itemPerPage);
    const chunkedDataGames = [];
    for (let i = 0; i < paginatedData.length; i += perSections) {
      chunkedDataGames.push(pageData.slice(i, i + perSections));
    }
    set({ dataListGames: chunkedDataGames });
  },
}));
