import { getDataGamePS2 } from "@/lib/firebase/services";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { create } from "zustand";

type getDataPS2 = {
  isLoading: boolean;
  dataGames: dataGamePS2[];
  setHandleGetData: (isMounted: boolean) => void;
};

export const useGetDataPS2 = create<getDataPS2>((set) => ({
  isLoading: true,
  dataGames: [],

  setHandleGetData: async (isMounted) => {
    try {
      set({ isLoading: true });
      const getData = await getDataGamePS2();
      if (isMounted) {
        set({ dataGames: getData });
      }
    } catch (error) {
      console.error("gagal ambil data", error);
    } finally {
      if (isMounted) {
        set({ isLoading: false });
      }
    }
  },
}));
