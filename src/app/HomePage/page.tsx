import CoverGames, {
  type propsCoverGame,
} from "@/components/coverGames/content";
import RootLayout from "../../layout/rootLayout/content";
import {
  Download,
  Gamepad2,
  GitCompareArrows,
  SearchCheck,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BenefitDownloadGame from "@/layout/benefitDownload/content";
import { dataGamesPopular } from "@/data/dataGame/datas";
import AllGamePS2 from "@/layout/allGamePS2/content";
import GenreGames from "@/components/genreGames/content";
import { useState } from "react";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 3;
  const totalPages = Math.ceil(dataGamesPopular.length / itemPerPage);

  const paginatedData = dataGamesPopular.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage,
  );

  const chunkedGames: propsCoverGame[][] = [];

  for (let i = 0; i < dataGamesPopular.length; i += 3) {
    chunkedGames.push(paginatedData.slice(i, i + 3));
  }
  return (
    <RootLayout
      titlePage="Download Games PS2 Here !!!"
      descPage="Classic PlayStation 2 Games, Ready to Play on Your PC"
    >
      <h1 className="font-semibold tracking-wide text-3xl">Popular Games</h1>
      <div className="mt-5">
        <div className="flex gap-5 items-center overflow-x-auto pb-3">
          {dataGamesPopular.map((item: propsCoverGame, i: number) => (
            <CoverGames
              key={i}
              srcImg={item.srcImg}
              altImg={item.altImg}
              rating={item.rating}
              genre={item.genre}
            />
          ))}
        </div>

        <AllGamePS2>
          <div className="flex gap-x-5 my-7">
            <div className="basis-1/5">
              <GenreGames />
            </div>
            <div className="basis-4/5 flex flex-col gap-y-5">
              {chunkedGames.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 place-items-center gap-x-5"
                >
                  {row.map((item, j) => (
                    <CoverGames
                      key={j}
                      srcImg={item.srcImg}
                      altImg={item.altImg}
                      rating={item.rating}
                      genre={item.genre}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </AllGamePS2>

        <div className="mt-10">
          <div className="instructionSection text-slate-100 tracking-wide h-40 rounded-t-md flex flex-col justify-center items-center gap-y-3">
            <h1 className="font-semibold text-3xl">Easy Downloads Game PS2</h1>
            <h3 className="text-lg font-medium">
              Revive Your Gaming Memories, Now Easier Than Ever
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <BenefitDownloadGame>
              <Download />
              <h1 className="text-xl font-semibold tracking-wide">
                Fast Download
              </h1>
              <p>fast and stable download process</p>
            </BenefitDownloadGame>
            <BenefitDownloadGame>
              <GitCompareArrows />
              <h1 className="text-xl font-semibold tracking-wide">
                Compatibility
              </h1>
              <p>compatible with various devices and OS</p>
            </BenefitDownloadGame>
            <BenefitDownloadGame>
              <SearchCheck />
              <h1 className="text-xl font-semibold tracking-wide">
                Safe & Secure
              </h1>
              <p>Keep your Producing by playing</p>
            </BenefitDownloadGame>
            <BenefitDownloadGame>
              <Gamepad2 />
              <h1 className="text-xl font-semibold tracking-wide">
                Install Game
              </h1>
              <p>Learn Run to install, and enjoy</p>
            </BenefitDownloadGame>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
