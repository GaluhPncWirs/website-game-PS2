import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/genreGames/content";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function AllGames() {
  const chunkedGames = useHandlePagination((state) => state.dataListGames);
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const isMediaQuery = useMediaQuery();
  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <AllGamePS2
          limitedData={gamesPS2}
          itemPerPage={isMediaQuery ? 4 : 9}
          perSections={isMediaQuery ? 4 : 9}
        >
          <div className="lg:flex gap-5 my-7">
            <div className="lg:w-1/5 mb-5 flex flex-col gap-5">
              <div className="bg-slate-100">
                <label
                  htmlFor="searchGame"
                  className="text-xl font-medium border w-full border-slate-400 px-5 py-2 bg-slate-300"
                >
                  Search game
                </label>
                <div className="relative flex items-center mt-2">
                  <Search size={20} className="absolute left-2" />
                  <Input type="text" className="pl-9 bg-slate-200" />
                </div>
              </div>
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
