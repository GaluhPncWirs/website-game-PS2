import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import type React from "react";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

type propsGamesPopular = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function GamesPopular(props: propsGamesPopular) {
  const { itemPerPage, children } = props;
  const { dataGames, isLoading } = useGetDataPS2(
    useShallow((props) => ({
      dataGames: props.dataGames,
      isLoading: props.isLoading,
    })),
  );
  const { handleSortByTopRated, sortByTopRated } = useFilterGames(
    useShallow((state) => ({
      handleSortByTopRated: state.useHandleSortByGame,
      sortByTopRated: state.sortBy,
    })),
  );
  const totalPages = Math.ceil(sortByTopRated.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGamePopular,
  );

  useEffect(() => {
    handleSortByTopRated(dataGames, "topRated");
  }, [handleSortByTopRated, dataGames]);

  useEffect(() => {
    if (isLoading || sortByTopRated.length === 0) return;

    setPaginationDataGame(sortByTopRated, currentPage, itemPerPage);
  }, [
    setPaginationDataGame,
    isLoading,
    sortByTopRated,
    currentPage,
    itemPerPage,
  ]);

  return (
    <>
      <Pagination className="mb-3 flex justify-end">
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

      {isLoading ? <h1>loading...</h1> : children}
    </>
  );
}
