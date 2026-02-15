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
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function SearchGames() {
  const [searchGame, setSearchGame] = useState<string>("");
  const listGamesRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchGame, setIsOpenSearchGame] = useState<boolean>(true);
  const { setSelectedGame, filteredGames } = useFilterGames(
    useShallow((state) => ({
      setSelectedGame: state.useHandleSearchGame,
      filteredGames: state.filteredGames,
    })),
  );
  const { disabledFilter, setDisabledFilter } = useFiltersActive(
    useShallow((state) => ({
      disabledFilter: state.disabledFilter,
      setDisabledFilter: state.setDisabledFilter,
    })),
  );

  const isDisabled = disabledFilter !== null && disabledFilter !== "search";

  const normalizedSearch = searchGame.toLowerCase();

  useEffect(() => {
    setSelectedGame(normalizedSearch);
  }, [setSelectedGame, normalizedSearch]);

  function handleItemSelected(gameItem: dataGamePS2) {
    setSearchGame(gameItem.cleanTitle);
    setIsOpenSearchGame(false);
  }

  // useEffect(() => {
  //   if (searchGame === "" && !isOpenSearchGame) {
  //     setIsOpenSearchGame(true);
  //   }
  // }, [searchGame, isOpenSearchGame]);

  // useEffect(() => {
  //   if (disabledFilter === null) {
  //     setSearchGame("");
  //   }
  // }, [disabledFilter]);

  return (
    <Command>
      <CommandInput
        onValueChange={(val) => {
          setSearchGame(val);
          setDisabledFilter("search");
        }}
        value={searchGame}
        placeholder="Search Games..."
        disabled={isDisabled}
        className={`w-full ${isDisabled ? "opacity-50" : ""}`}
      />
      {isOpenSearchGame && (
        <>
          {searchGame !== "" && (
            <CommandList ref={listGamesRef}>
              {filteredGames.length > 0 ? (
                <CommandGroup>
                  {filteredGames.map((itemGame: dataGamePS2) => (
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
