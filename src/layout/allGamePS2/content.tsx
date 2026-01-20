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
import { dataGamesPopular } from "@/data/dataGame/datas";
import { useHandlePagination } from "@/store/usePageDataGame/state";

type propsAllGamePS2 = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function AllGamePS2(props: propsAllGamePS2) {
  const { itemPerPage, children } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(dataGamesPopular.length / itemPerPage);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGame,
  );

  useEffect(() => {
    setPaginationDataGame(currentPage, itemPerPage);
  }, [currentPage, itemPerPage, setPaginationDataGame]);

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
