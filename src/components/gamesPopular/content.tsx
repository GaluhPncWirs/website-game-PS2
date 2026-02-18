import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/shallow";
import Skeleton from "./skeleton";
import type { dataGamePS2 } from "@/types/dataGamePS2";

type propsGamesPopular = {
  itemPerPage: number;
  children: React.ReactNode;
};

export default function GamesPopular(props: propsGamesPopular) {
  const { itemPerPage, children } = props;
  const handleGetData = useGetDataPS2((state) => state.setHandleGetData);

  useEffect(() => {
    let isMounted = true;
    handleGetData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [handleGetData]);
  const { dataGames, isLoading } = useGetDataPS2(
    useShallow((props) => ({
      dataGames: props.dataGames,
      isLoading: props.isLoading,
    })),
  );
  const gamePopular = useMemo(() => {
    const sortByTopRate = dataGames.filter(
      (gameTopRate: dataGamePS2) => Number(gameTopRate.rating) > 9.0,
    );
    return sortByTopRate;
  }, [dataGames]);

  const totalPages = Math.ceil(gamePopular.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setPaginationDataGame = useHandlePagination(
    (state) => state.setPaginationDataGamePopular,
  );

  useEffect(() => {
    if (isLoading || gamePopular.length === 0) return;

    setPaginationDataGame(gamePopular, currentPage, itemPerPage);
  }, [setPaginationDataGame, isLoading, gamePopular, currentPage, itemPerPage]);

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

      {isLoading ? <Skeleton /> : children}
    </>
  );
}
