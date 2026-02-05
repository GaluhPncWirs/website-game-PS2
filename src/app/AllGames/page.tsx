import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/filterGame/genreGames/content";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import SearchGames from "@/components/filterGame/searchGames/content";
import TagsGames from "@/components/filterGame/tagsGames/content";
import { useFilterGames } from "@/store/useSearchGames/state";

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataListGames);
  const filterBySearchGame = useFilterGames((state) => state.filterBySearch);
  const filterByGenreGame = useFilterGames((state) => state.filterByGenre);
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const isMediaQuery = useMediaQuery();

  function handleResultFilterGame() {
    if (filterBySearchGame.length > 0) {
      return filterBySearchGame;
    } else if (filterByGenreGame.length > 0) {
      return filterByGenreGame;
    } else {
      return gamesPS2;
    }
  }

  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <AllGamePS2
          limitedData={handleResultFilterGame()}
          itemPerPage={isMediaQuery ? 4 : 9}
          perSections={isMediaQuery ? 4 : 9}
        >
          <div className="lg:flex gap-5 my-7">
            <div className="lg:w-1/5 mb-5 flex flex-col gap-5">
              <SearchGames gamesPS2={gamesPS2} />
              <GenreGames gamesPS2={gamesPS2} />
              <TagsGames />
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
