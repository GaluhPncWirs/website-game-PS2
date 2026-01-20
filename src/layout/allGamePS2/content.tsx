import React from "react";
import SortGames from "../../components/sortGames/content";

type propsAllGamePS2 = {
  // itemPerPage: number;
  children: React.ReactNode;
};

export default function AllGamePS2({ children }: propsAllGamePS2) {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const totalPages = Math.ceil(dataGamesPopular.length / itemPerPage);

  // const paginatedData = dataGamesPopular.slice(
  //   (currentPage - 1) * itemPerPage,
  //   currentPage * itemPerPage,
  // );

  // const chunkedGames: propsCoverGame[][] = [];

  // for (let i = 0; i < dataGamesPopular.length; i += 3) {
  //   chunkedGames.push(paginatedData.slice(i, i + 3));
  // }

  return (
    <div className="mt-7">
      <SortGames />
      {children}
    </div>
  );
}
