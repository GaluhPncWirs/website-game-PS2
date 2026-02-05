import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearchGames } from "@/store/useSearchGames/state";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useEffect, useRef, useState } from "react";

export default function SearchGames({ gamesPS2 }: { gamesPS2: dataGamePS2[] }) {
  const [searchGame, setSearchGame] = useState<string>("");
  const [resultSearchGame, setResultSearchGame] = useState<dataGamePS2[]>([]);
  const listGamesRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchGame, setIsOpenSearchGame] = useState<boolean>(true);
  const setSelectedGame = useSearchGames((state) => state.useHandleClickItem);
  const selectedGame = useSearchGames((state) => state.selectedGame);

  const normalizedSearch = searchGame.toLowerCase();
  useEffect(() => {
    function handleSearchGame() {
      if (normalizedSearch !== "") {
        const filterSearchGame = gamesPS2.filter((item: dataGamePS2) => {
          return item.cleanTitle?.toLowerCase().startsWith(normalizedSearch);
        });
        setResultSearchGame(filterSearchGame);
      } else {
        setResultSearchGame([]);
      }
    }
    handleSearchGame();
  }, [normalizedSearch, gamesPS2]);

  function handleItemClick(gameItem: dataGamePS2) {
    setSelectedGame(gameItem);
    setSearchGame(gameItem.cleanTitle);
    setIsOpenSearchGame(false);
  }

  useEffect(() => {
    if (selectedGame.length > 0) {
      setIsOpenSearchGame(true);
    }
  }, [selectedGame]);
  return (
    <Command>
      <CommandInput
        onValueChange={setSearchGame}
        value={searchGame}
        placeholder="Search Games..."
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
                      onSelect={() => handleItemClick(itemGame)}
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
