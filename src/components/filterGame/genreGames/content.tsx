import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useFilterGames } from "@/store/useSearchGames/state";

const dataGenreGames = [
  "Action",
  "Adventure",
  "RPG",
  "Racing",
  "Sports",
  "Fighting",
  "Shooter",
  "Music",
  "Puzzle",
  "Strategy",
];

export default function GenreGames({ gamesPS2 }: { gamesPS2: dataGamePS2[] }) {
  const [genreIsCheked, setGenreIsCheked] = useState<string>("");
  const filterByGenre = useFilterGames((state) => state.useHandleGenreGame);
  useEffect(() => {
    filterByGenre(gamesPS2, genreIsCheked);
  }, [gamesPS2, genreIsCheked]);

  return (
    <div>
      <h2 className="text-xl font-medium border border-slate-400 px-5 py-2 border-b-0 bg-slate-300">
        Genre Games
      </h2>
      <div className="border border-slate-400 px-5 py-3 bg-slate-100">
        <ul className="flex flex-wrap gap-3 items-center mb-4">
          {dataGenreGames.map((item: string, i: number) => (
            <li className="flex items-center gap-x-2" key={i}>
              <Input
                type="radio"
                className="size-4"
                id={item}
                name="genre"
                value={item}
                onClick={(event) =>
                  setGenreIsCheked((event.target as HTMLInputElement).value)
                }
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
        <Button className="w-full">Apply Filter</Button>
      </div>
    </div>
  );
}
