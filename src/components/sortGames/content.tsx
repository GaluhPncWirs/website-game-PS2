import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useState } from "react";

export default function SortGames() {
  const dataGames = useGetDataPS2((state) => state.dataGames);
  const [sortByValue, setSortByValue] = useState<string | null>(null);

  if (sortByValue === "topRated") {
    const filterByTopRated = dataGames.filter(
      (topRatedGame) => Number(topRatedGame.rating) > 9.0,
    );
    console.log(filterByTopRated);
  } else if (sortByValue === "newest") {
    const filterByNewest = [...dataGames]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 50);
    console.log(filterByNewest);
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-3xl font-semibold tracking-wide">All Games PS2</h1>
      <Select onValueChange={(val) => setSortByValue(val)}>
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="mostDownloaded">Most Downloaded</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="topRated">Top Rated</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
