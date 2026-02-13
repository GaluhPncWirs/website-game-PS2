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
import { useFiltersActive } from "@/store/useFiltersActive/state";

type propsAllGamePS2 = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function AllGamePS2(props: propsAllGamePS2) {
  const { itemPerPage, children } = props;
  const { dataGames, isLoading } = useGetDataPS2(
    useShallow((state) => ({
      dataGames: state.dataGames,
      isLoading: state.isLoading,
    })),
  );
  const { disabledFilter, setResetFilter } = useFiltersActive(
    useShallow((state) => ({
      disabledFilter: state.disabledFilter,
      setResetFilter: state.setDisabledFilter,
    })),
  );
  // const resetFilter = useFiltersActive((state) => state.setDisabledFilter);
  const { filterBySearchGame, filterByGenreGame, filterByTagGame, sortByGame } =
    useFilterGames(
      useShallow((state) => ({
        filterBySearchGame: state.filterBySearch,
        filterByGenreGame: state.filterByGenre,
        filterByTagGame: state.filterByTag,
        sortByGame: state.sortBy,
      })),
    );

  const handleResultFilterGame = useCallback(() => {
    if (disabledFilter !== null) {
      if (filterBySearchGame.length > 0) {
        return filterBySearchGame;
      } else if (filterByGenreGame.length > 0) {
        return filterByGenreGame;
      } else if (filterByTagGame.length > 0) {
        return filterByTagGame;
      } else if (sortByGame.length > 0) {
        return sortByGame;
      } else {
        return dataGames;
      }
    } else {
      return dataGames;
    }
  }, [
    disabledFilter,
    filterBySearchGame,
    filterByGenreGame,
    filterByTagGame,
    sortByGame,
    dataGames,
  ]);

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
          <Button onClick={() => setResetFilter(null)} className="w-fit">
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
