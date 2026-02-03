import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import type React from "react";
import { useEffect, useMemo, useState } from "react";

type propsGamesPopular = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function GamesPopular(props: propsGamesPopular) {
  const { itemPerPage, children } = props;
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const filterGamePopuler = useMemo(() => {
    return gamesPS2.filter((fil: any) => Number(fil.rating) > 9.0);
  }, [gamesPS2]);
  const totalPages = Math.ceil(filterGamePopuler.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGamePopular,
  );

  useEffect(() => {
    if (isLoading || filterGamePopuler.length === 0) return;

    setPaginationDataGame(filterGamePopuler, currentPage, itemPerPage);
  }, [isLoading, filterGamePopuler, currentPage, itemPerPage]);

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

      {isLoading ? <h1>Loading...</h1> : children}
    </div>
  );
}
