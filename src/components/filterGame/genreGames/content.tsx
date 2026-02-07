import { Input } from "../../ui/input";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";

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
  "Platformer",
];

export default function GenreGames({ activeFilters, setActiveFilters }: any) {
  const filterByGenre = useFilterGames((state) => state.useHandleGenreGame);
  const dataGames = useGetDataPS2((state) => state.dataGames);
  const isDisabled = activeFilters !== null && activeFilters !== "genre";
  function handleGenreIsCheked(event: Event) {
    const targetValue = event.target as HTMLInputElement;
    filterByGenre(dataGames, targetValue.value);
  }

  console.log(isDisabled);

  return (
    <div>
      <h2 className="text-xl font-medium border border-slate-400 px-5 py-2 border-b-0 bg-slate-300">
        Genre Games
      </h2>
      <div className="border border-slate-400 px-5 py-3 bg-slate-100">
        <ul
          className={`flex flex-wrap gap-3 items-center ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => setActiveFilters("genre")}
        >
          {dataGenreGames.map((item: string, i: number) => (
            <li className="flex items-center gap-x-2" key={i}>
              <Input
                type="radio"
                className="size-4"
                id={item}
                name="genre"
                value={item}
                onClick={(e: any) => handleGenreIsCheked(e)}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
