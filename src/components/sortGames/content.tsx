import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useEffect, useState } from "react";

export default function SortGames() {
  const [sortByValue, setSortByValue] = useState<string | null>(null);
  const handleSortByGame = useFilterGames((state) => state.useHandleSortByGame);
  const dataGames = useGetDataPS2((props) => props.dataGames);

  useEffect(() => {
    if (!sortByValue) return;
    handleSortByGame(dataGames, sortByValue);
  }, [handleSortByGame, dataGames, sortByValue]);

  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-3xl font-semibold tracking-wide">All Games PS2</h1>
      <Select onValueChange={(val) => setSortByValue(val)}>
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectItem value="mostDownloaded">Most Downloaded</SelectItem> */}
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="topRated">Top Rated</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
