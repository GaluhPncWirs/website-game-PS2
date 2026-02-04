import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/genreGames/content";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useRef, useState } from "react";
import type { dataGamePS2 } from "@/types/dataGamePS2";

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataListGames);
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const isMediaQuery = useMediaQuery();
  const [searchGame, setSearchGame] = useState<string>("");
  const [resultSearchGame, setResultSearchGame] = useState<dataGamePS2[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const listGamesRef = useRef<HTMLDivElement>(null);
  const [selectedGame, setSelectedGame] = useState<dataGamePS2 | null>(null);
  const [isOpenSearchGame, setIsOpenSearchGame] = useState<boolean>(true);

  useEffect(() => {
    function handleSearchGame() {
      if (searchGame !== "") {
        const filterSearchGame = gamesPS2.filter((item: dataGamePS2) => {
          return item.cleanTitle
            ?.toLowerCase()
            .startsWith(searchGame?.toLowerCase());
        });
        setResultSearchGame(filterSearchGame);
        setActiveIndex(-1);
      } else {
        setResultSearchGame([]);
      }
    }
    handleSearchGame();
  }, [gamesPS2, searchGame]);

  function scrollToActiveItem(index: number) {
    const listGames = listGamesRef.current;
    if (listGames) {
      const activeItemGame = listGames.children[index] as HTMLElement;
      if (activeItemGame) {
        activeItemGame.scrollIntoView({ block: "nearest" });
      }
    }
  }

  useEffect(() => {
    function handleKeyEvent(event: KeyboardEvent) {
      if (resultSearchGame.length > 0) {
        if (event.key === "ArrowDown") {
          setActiveIndex((prev) => {
            const newIndex = (prev + 1) % resultSearchGame.length;
            scrollToActiveItem(newIndex);
            return newIndex;
          });
        } else if (event.key === "ArrowUp") {
          setActiveIndex((prev) => {
            const newIndex =
              (prev - 1 + resultSearchGame.length) % resultSearchGame.length;
            scrollToActiveItem(newIndex);
            return newIndex;
          });
        } else if (event.key === "Enter" && activeIndex >= 0) {
          setSelectedGame(resultSearchGame[activeIndex]);
          setIsOpenSearchGame(false);
        } else {
          setIsOpenSearchGame(true);
        }
      }
    }

    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [resultSearchGame, activeIndex]);

  function handleItemClick(gameItem: dataGamePS2) {
    setSelectedGame(gameItem);
    setSearchGame(gameItem.cleanTitle);
    setIsOpenSearchGame(false);
  }

  useEffect(() => {
    if (selectedGame) {
      setSearchGame(selectedGame.cleanTitle);
    }
  }, [selectedGame]);

  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <AllGamePS2
          limitedData={
            resultSearchGame.length > 0 ? resultSearchGame : gamesPS2
          }
          itemPerPage={isMediaQuery ? 4 : 9}
          perSections={isMediaQuery ? 4 : 9}
        >
          <div className="lg:flex gap-5 my-7">
            <div className="lg:w-1/5 mb-5 flex flex-col gap-5">
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
                            {resultSearchGame.map(
                              (itemGame: dataGamePS2, i: number) => (
                                <CommandItem
                                  key={itemGame.id}
                                  onSelect={() => handleItemClick(itemGame)}
                                  className={`cursor-pointer mb-1 ${activeIndex === i ? "bg-slate-100" : ""} `}
                                >
                                  {itemGame.cleanTitle}
                                </CommandItem>
                              ),
                            )}
                          </CommandGroup>
                        ) : (
                          <CommandEmpty>Game Not Found.</CommandEmpty>
                        )}
                      </CommandList>
                    )}
                  </>
                )}
              </Command>
              <GenreGames />
              <div className="border border-slate-400 bg-slate-100">
                <h2 className="text-xl font-medium border-b border-b-slate-400 px-5 py-2 bg-slate-300">
                  Tags
                </h2>
                <div className="grid grid-cols-5 gap-1.5 p-3">
                  {alphabeth.map((item: string, i: number) => (
                    <h2
                      key={i}
                      className="bg-slate-300 px-2 rounded-sm font-semibold text-lg text-center cursor-pointer"
                    >
                      {item}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
            <div className="basis-4/5 flex flex-col gap-y-5">
              {chunkedGames.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-5"
                >
                  {row.map((item, j) => (
                    <CoverGameWithDesc
                      key={j}
                      srcImg={item.url_image}
                      altImg={item.cleanTitle}
                      gameName={item.cleanTitle}
                      rating={item.rating}
                      genre={item.genre}
                      idGame={item.id}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AllGamePS2>
      )}
    </RootLayout>
  );
}
