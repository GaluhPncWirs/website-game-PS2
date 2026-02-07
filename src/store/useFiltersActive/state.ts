import { create } from "zustand";

type filtersActive = {
  activeFilters: boolean | null;
  setActiveSearchGame: (activeFilters: string) => void;
  setActiveGenreGame: (activeFilters: string) => void;
  setActiveTagGame: (activeFilters: string) => void;
};

export const useFiltersActive = create<filtersActive>((set) => ({
  activeFilters: null,

  setActiveSearchGame: (activeFilter) => {
    const isDisabled = activeFilter !== null && activeFilter !== "search";
    set({ activeFilters: isDisabled });
  },
  setActiveGenreGame: (activeFilter) => {
    const isDisabled = activeFilter !== null && activeFilter !== "genre";
    set({ activeFilters: isDisabled });
  },
  setActiveTagGame: (activeFilter) => {
    const isDisabled = activeFilter !== null && activeFilter !== "tags";
    set({ activeFilters: isDisabled });
  },
}));
