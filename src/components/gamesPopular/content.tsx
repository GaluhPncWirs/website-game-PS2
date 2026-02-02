import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { dataGamesPopular } from "@/data/dataGame/datas";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import type React from "react";
import { useEffect, useState } from "react";

export default function GamesPopular({ children }: React.PropsWithChildren) {
  const totalPages = Math.ceil(dataGamesPopular.length / 4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGame,
  );

  useEffect(() => {
    setPaginationDataGame(currentPage, 4, 4);
  }, [currentPage]);

  return (
    <div>
      <Pagination className="mb-5 flex justify-end">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {children}
    </div>
  );
}
