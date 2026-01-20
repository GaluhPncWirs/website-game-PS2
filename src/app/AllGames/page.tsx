import AllGamePS2 from "@/layout/allGamePS2/content";
import RootLayout from "@/layout/rootLayout/content";
import { type propsCoverGameWithDesc } from "@/components/coverGameWithDesc/content";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { dataGamesPopular } from "@/data/dataGame/datas";
import GenreGames from "@/components/genreGames/content";
import { useState } from "react";
import CoverGameWithDesc from "@/components/coverGameWithDesc/content";

export default function AllGames() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 12;
  const totalPages = Math.ceil(dataGamesPopular.length / itemPerPage);

  const paginatedData = dataGamesPopular.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage,
  );

  const chunkedGames: propsCoverGameWithDesc[][] = [];

  for (let i = 0; i < dataGamesPopular.length; i += 3) {
    chunkedGames.push(paginatedData.slice(i, i + 3));
  }

  return (
    <RootLayout
      titlePage="All PS2 Games"
      descPage="Browse and download PlayStation 2 game for your emulator"
    >
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
                  <CoverGameWithDesc
                    key={j}
                    srcImg={item.srcImg}
                    altImg={item.altImg}
                    gameName={item.gameName}
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
    </RootLayout>
  );
}
