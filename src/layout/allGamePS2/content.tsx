import React, { useEffect, useState } from "react";
import SortGames from "../../components/sortGames/content";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";

type propsAllGamePS2 = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function AllGamePS2(props: propsAllGamePS2) {
  const { itemPerPage, children } = props;
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const limitedData = gamesPS2.slice(0, 15);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(limitedData.length / itemPerPage);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGame,
  );

  useEffect(() => {
    setPaginationDataGame(limitedData, currentPage, itemPerPage, 3);
  }, [currentPage, itemPerPage]);

  return (
    <div className="mt-7">
      <SortGames />

      {isLoading ? <h1>loading...</h1> : children}

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
