import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function SortGames() {
  const [sortByValue, setSortByValue] = useState<string | undefined>(undefined);
  const { setSortByGame, resetFilter, disabledFilter } = useFilterGames(
    useShallow((state) => ({
      setSortByGame: state.useHandleSortByGame,
      resetFilter: state.resetFilter,
      disabledFilter: state.disabledFilter,
    })),
  );

  const isDisabled = disabledFilter !== null && disabledFilter !== "sort";

  useEffect(() => {
    if (!sortByValue) return;
    setSortByGame(sortByValue);
  }, [setSortByGame, sortByValue]);

  const sortValue = disabledFilter === null ? undefined : sortByValue;

  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-3xl font-semibold tracking-wide">All Games PS2</h1>
      <Select
        onValueChange={(val) => {
          setSortByValue(val);
          resetFilter("sort");
        }}
        value={sortValue}
        disabled={isDisabled}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="topRated">Top Rated</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
