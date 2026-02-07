import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/filterGame/genreGames/content";
import { useMediaQuery } from "@/hooks/mediaQuery";
import SearchGames from "@/components/filterGame/searchGames/content";
import TagsGames from "@/components/filterGame/tagsGames/content";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type activeFilters = "search" | "genre" | "tags" | null;
export type Props = {
  activeFilter: activeFilters;
  setActiveFilter: React.Dispatch<React.SetStateAction<activeFilters>>;
};

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataListGames);
  const handleGetData = useGetDataPS2((state) => state.setHandleGetData);
  const isMediaQuery = useMediaQuery();
  const [activeFilters, setActiveFilters] = useState<activeFilters>(null);

  useEffect(() => {
    let isMounted = true;
    handleGetData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [handleGetData]);

  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
      <AllGamePS2 itemPerPage={isMediaQuery ? 4 : 9}>
        <div className="lg:flex gap-5 my-7">
          <div className="lg:w-1/5 mb-5 flex flex-col gap-5">
            <SearchGames
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            <GenreGames
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            <TagsGames
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            <Button onClick={() => setActiveFilters(null)}>Reset Filter</Button>
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
    </RootLayout>
  );
}
