import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useFiltersActive } from "@/store/useFiltersActive/state";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function SortGames() {
  const [sortByValue, setSortByValue] = useState<string | null>(null);
  const handleSortByGame = useFilterGames((state) => state.useHandleSortByGame);
  const { disabledFilter, setDisabledFilter } = useFiltersActive(
    useShallow((state) => ({
      disabledFilter: state.disabledFilter,
      setDisabledFilter: state.setDisabledFilter,
    })),
  );

  const isDisabled = disabledFilter !== null && disabledFilter !== "sort";

  useEffect(() => {
    if (!sortByValue) return;
    handleSortByGame(sortByValue);
  }, [handleSortByGame, sortByValue]);

  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-3xl font-semibold tracking-wide">All Games PS2</h1>
      <Select
        onValueChange={(val) => {
          setSortByValue(val);
          setDisabledFilter("sort");
        }}
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
