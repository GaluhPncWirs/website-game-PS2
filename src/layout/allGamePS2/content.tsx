import React, { useEffect, useState } from "react";
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
import type { dataGamePS2 } from "@/types/dataGamePS2";

type propsAllGamePS2 = {
  limitedData: dataGamePS2[];
  itemPerPage: number;
  perSections: number;
  children: React.ReactNode;
};

export default function AllGamePS2(props: propsAllGamePS2) {
  const { limitedData, itemPerPage, perSections, children } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(limitedData.length / itemPerPage);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataListGame,
  );

  useEffect(() => {
    if (limitedData.length === 0) return;

    setPaginationDataGame(limitedData, currentPage, itemPerPage, perSections);
  }, [limitedData, currentPage, itemPerPage]);

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

      {children}

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
