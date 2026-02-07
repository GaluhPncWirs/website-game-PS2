import { create } from "zustand";

type filtersActive = {
  disabledFilter: string | null;
  setDisabledFilter: (
    activeFilters: "search" | "genre" | "tags" | null,
  ) => void;
};

export const useFiltersActive = create<filtersActive>((set) => ({
  disabledFilter: null,

  setDisabledFilter: (activeFilters) => {
    set({ disabledFilter: activeFilters });
  },
}));
