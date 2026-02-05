import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type searchGames = {
  selectedGame: dataGamePS2[];
  useHandleClickItem: (gameList: dataGamePS2) => void;
};

export const useSearchGames = create<searchGames>((set) => ({
  selectedGame: [],

  useHandleClickItem: (gameList) => {
    set({ selectedGame: [gameList] });
  },
}));
