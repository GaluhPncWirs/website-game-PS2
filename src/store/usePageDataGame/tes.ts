import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type stateHandlePagination = {
  dataGames: dataGamePS2[][];
  currentPage: number;
  itemPerPage: number;
  perSections: number;
  setCurrentPage1: (dataGamesPS2: dataGamePS2[], page: number) => void;
  setItemPerPage: (dataGamesPS2: dataGamePS2[], count: number) => void;
  setPerSections: (dataGamePS2: dataGamePS2[], payload: []) => void;
};

function paginate(
  dataGamesPS2: dataGamePS2[],
  currentPage: number,
  itemPerPage: number,
  perSections: number,
) {
  const paginatedData = dataGamesPS2.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage,
  );
  const chunked: (typeof paginatedData)[] = [];
  for (let i = 0; i < paginatedData.length; i += perSections) {
    chunked.push(paginatedData.slice(i, i + perSections));
  }

  return chunked;
}

export const useHandlePagination2 = create<stateHandlePagination>((set) => ({
  currentPage: 1,
  itemPerPage: 4,
  perSections: 4,
  dataGames: [],

  setCurrentPage1: (dataGamesPS2, page) => {
    set((state) => ({
      currentPage: page,
      dataGames: paginate(
        dataGamesPS2,
        page,
        state.itemPerPage,
        state.perSections,
      ),
    }));
  },

  setItemPerPage: (dataGamesPS2, count) => {
    set((state) => ({
      itemPerPage: count,
      currentPage: 1,
      dataGames: paginate(dataGamesPS2, 1, count, state.perSections),
    }));
  },

  setPerSections: (dataGamePS2, payload) => {
    set((state) => {
      const next = { ...state, ...payload };

      return {
        ...next,
        dataGames: paginate(
          dataGamePS2,
          next.currentPage,
          next.itemPerPage,
          next.perSections,
        ),
      };
    });
  },
}));
