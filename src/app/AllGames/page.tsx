import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/genreGames/content";
import { useMediaQuery } from "@/hooks/mediaQuerry";

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataGames);
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const isMediaQuery = useMediaQuery();
  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
      <AllGamePS2 itemPerPage={6}>
        <div className="flex gap-x-5 my-7">
          <div className="basis-1/5">
            <GenreGames />
            <div className="mt-5 border border-slate-400 bg-slate-100">
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
                className="grid grid-cols-3 place-items-center gap-x-5"
              >
                {row.map((item, j) => (
                  <CoverGameWithDesc
                    key={j}
                    srcImg={item.srcImg}
                    altImg={item.altImg}
                    gameName={item.altImg}
                    rating={item.rating}
                    genre={item.genre}
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
