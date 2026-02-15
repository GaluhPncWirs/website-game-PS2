import React, { useCallback, useEffect, useState } from "react";
import SortGames from "../../components/sortGames/content";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useShallow } from "zustand/shallow";
import Skeleton from "./skeleton";
import SearchGames from "@/components/filterGame/searchGames/content";
import GenreGames from "@/components/filterGame/genreGames/content";
import TagsGames from "@/components/filterGame/tagsGames/content";
import { Button } from "@/components/ui/button";

type propsAllGamePS2 = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function AllGamePS2(props: propsAllGamePS2) {
  const { itemPerPage, children } = props;

  // getDataGames
  const handleGetData = useGetDataPS2((state) => state.setHandleGetData);
  useEffect(() => {
    let isMounted = true;
    handleGetData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [handleGetData]);
  const { dataGames, isLoading } = useGetDataPS2(
    useShallow((state) => ({
      dataGames: state.dataGames,
      isLoading: state.isLoading,
    })),
  );

  // filtered game
  const { filteredGames, setGames, resetFilter } = useFilterGames(
    useShallow((state) => ({
      filteredGames: state.filteredGames,
      setGames: state.setGames,
      resetFilter: state.resetFilter,
    })),
  );

  useEffect(() => {
    if (isLoading) return;
    setGames(dataGames);
  }, [isLoading, setGames, dataGames]);

  const handleResultFilterGame = useCallback(() => {
    if (filteredGames.length > 0) {
      return filteredGames;
    } else {
      return dataGames;
    }
  }, [filteredGames, dataGames]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(handleResultFilterGame().length / itemPerPage);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataListGame,
  );

  useEffect(() => {
    if (isLoading || handleResultFilterGame().length === 0) return;
    setPaginationDataGame(handleResultFilterGame(), currentPage, itemPerPage);
  }, [
    setPaginationDataGame,
    isLoading,
    handleResultFilterGame,
    currentPage,
    itemPerPage,
  ]);

  function getPaginationRange(current: number, total: number, delta = 1) {
    const range: number[] = [];
    const rangeWithDots: (number | "...")[] = [];
    let last: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (last && i - last > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      last = i;
    }

    return rangeWithDots;
  }

  return (
    <div className="mt-7">
      <SortGames />

      <div className="lg:flex gap-5 my-7">
        <div className="lg:w-1/5 mb-5 flex flex-col gap-5">
          <SearchGames />
          <GenreGames />
          <TagsGames />
          <Button onClick={() => resetFilter(null)} className="w-fit">
            Reset Filter
          </Button>
        </div>
        {isLoading ? <Skeleton /> : children}
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

          {getPaginationRange(currentPage, totalPages).map((item, idx) => (
            <PaginationItem key={idx}>
              {item === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={currentPage === item}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

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
    </div>
  );
}
