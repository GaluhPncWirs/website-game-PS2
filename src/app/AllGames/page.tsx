import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useEffect } from "react";

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataListGames);
  const isMediaQuery = useMediaQuery();
  const handleGetData = useGetDataPS2((state) => state.setHandleGetData);

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
      </AllGamePS2>
    </RootLayout>
  );
}
