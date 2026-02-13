import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useFiltersActive } from "@/store/useFiltersActive/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function SearchGames() {
  const dataGames = useGetDataPS2((state) => state.dataGames);
  const [searchGame, setSearchGame] = useState<string>("");
  const [resultSearchGame, setResultSearchGame] = useState<dataGamePS2[]>([]);
  const listGamesRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchGame, setIsOpenSearchGame] = useState<boolean>(true);
  const setSelectedGame = useFilterGames((state) => state.useHandleSearchGame);
  const { disabledFilter, setDisabledFilter } = useFiltersActive(
    useShallow((state) => ({
      disabledFilter: state.disabledFilter,
      setDisabledFilter: state.setDisabledFilter,
    })),
  );

  const isDisabled = disabledFilter !== null && disabledFilter !== "search";

  const normalizedSearch = searchGame.toLowerCase();
  useEffect(() => {
    function handleSearchGame() {
      if (normalizedSearch !== "") {
        const filterSearchGame = dataGames.filter((item: dataGamePS2) =>
          item.cleanTitle?.toLowerCase().startsWith(normalizedSearch),
        );
        setResultSearchGame(filterSearchGame);
      } else {
        setResultSearchGame([]);
      }
    }
    handleSearchGame();
  }, [normalizedSearch, dataGames]);

  function handleItemSelected(gameItem: dataGamePS2) {
    setSelectedGame(gameItem);
    setSearchGame(gameItem.cleanTitle);
    setIsOpenSearchGame(false);
  }

  useEffect(() => {
    if (searchGame === "" && !isOpenSearchGame) {
      setIsOpenSearchGame(true);
    }
  }, [searchGame, isOpenSearchGame]);

  useEffect(() => {
    if (disabledFilter === null) {
      setSearchGame("");
    }
  }, [disabledFilter]);

  return (
    <Command>
      <CommandInput
        onValueChange={setSearchGame}
        value={searchGame}
        placeholder="Search Games..."
        disabled={isDisabled}
        onFocus={() => setDisabledFilter("search")}
        className={`w-full ${isDisabled ? "opacity-50" : ""}`}
      />
      {isOpenSearchGame && (
        <>
          {searchGame !== "" && (
            <CommandList ref={listGamesRef}>
              {resultSearchGame.length > 0 ? (
                <CommandGroup>
                  {resultSearchGame.map((itemGame: dataGamePS2) => (
                    <CommandItem
                      key={itemGame.id}
                      onSelect={() => handleItemSelected(itemGame)}
                    >
                      {itemGame.cleanTitle}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty>Game Not Found.</CommandEmpty>
              )}
            </CommandList>
          )}
        </>
      )}
    </Command>
  );
}
