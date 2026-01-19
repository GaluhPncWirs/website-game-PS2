import CoverGames, {
  type propsCoverGame,
} from "@/components/coverGames/content";
import RootLayout from "../../layout/rootLayout/content";
import {
  Download,
  Gamepad2,
  GitCompareArrows,
  SearchCheck,
} from "lucide-react";
import BenefitDownloadGame from "@/layout/benefitDownload/content";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const dataGamesPopular = [
  {
    srcImg: "/images/homePage/ps2_black_2.jpg",
    altImg: "Black",
    rating: "7.9",
    genre: "Action",
  },
  {
    srcImg: "/images/homePage/ps2_godofwar.jpg",
    altImg: "God Of War",
    rating: "7.4",
    genre: "Fantasy",
  },
  {
    srcImg: "/images/homePage/ps2_godofwar2.jpg",
    altImg: "God Of War 2",
    rating: "9.4",
    genre: "Fantasy",
  },
  {
    srcImg: "/images/homePage/ps2_midnightclub3.jpg",
    altImg: "Midnight Club 3",
    rating: "8.3",
    genre: "Racing",
  },
  {
    srcImg: "/images/homePage/ps2_residentevil4.jpg",
    altImg: "Resident Evil 4",
    rating: "7.4",
    genre: "Action",
  },
  {
    srcImg: "/images/homePage/ps2_sengokubasara2.jpg",
    altImg: "Sengoku Basara 2",
    rating: "8.3",
    genre: "Fantasy",
  },
];

export default function HomePage() {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataGamesPopular.length / ITEMS_PER_PAGE);

  const paginatedData = dataGamesPopular.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const chunkedGames: propsCoverGame[][] = [];

  for (let i = 0; i < paginatedData.length; i += 3) {
    chunkedGames.push(paginatedData.slice(i, i + 3));
  }

  return (
    <RootLayout>
      <div>
        <h1 className="font-semibold tracking-wide text-3xl">Popular Games</h1>
        <div className="mt-5">
          <div className="flex gap-5 items-center overflow-x-auto pb-3">
            {dataGamesPopular.map((item: propsCoverGame, i: number) => (
              <CoverGames
                key={i}
                srcImg={item.srcImg}
                altImg={item.altImg}
                rating={item.rating}
                genre={item.genre}
              />
            ))}
          </div>

          <div className="mt-7">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-2xl font-semibold tracking-wide">
                List Games PS2
              </h1>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="mostDownloaded">
                      Most Downloaded
                    </SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="topRated">Top Rated</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-x-5 my-5">
              <div className="basis-1/5">
                <h2 className="text-xl font-medium border border-slate-400 px-5 py-2 border-b-0 bg-slate-300">
                  Genre Games
                </h2>
                <ul className="flex flex-col gap-y-2 border border-slate-400 px-5 py-3 bg-slate-100">
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Action</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Adventure</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">RPG</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Racing</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Horor</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Strategy</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Sports</label>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Input type="checkbox" className="size-4" />
                    <label htmlFor="">Simulation</label>
                  </li>
                </ul>
              </div>
              <div className="basis-4/5 flex flex-col gap-y-6">
                {chunkedGames.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 place-items-center gap-x-5"
                  >
                    {row.map((item, j) => (
                      <CoverGames
                        key={j}
                        srcImg={item.srcImg}
                        altImg={item.altImg}
                        rating={item.rating}
                        genre={item.genre}
                      />
                    ))}
                  </div>
                ))}
              </div>
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
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
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

          <div className="mt-7">
            <div className="instructionSection text-slate-100 tracking-wide h-40 rounded-t-md flex flex-col justify-center items-center gap-y-3">
              <h1 className="font-semibold text-3xl">
                Easy Downloads Game PS2
              </h1>
              <h3 className="text-lg font-medium">
                Revive Your Gaming Memories, Now Easier Than Ever
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <BenefitDownloadGame>
                <Download />
                <h1 className="text-xl font-semibold tracking-wide">
                  Fast Download
                </h1>
                <p>fast and stable download process</p>
              </BenefitDownloadGame>
              <BenefitDownloadGame>
                <GitCompareArrows />
                <h1 className="text-xl font-semibold tracking-wide">
                  Compatibility
                </h1>
                <p>compatible with various devices and OS</p>
              </BenefitDownloadGame>
              <BenefitDownloadGame>
                <SearchCheck />
                <h1 className="text-xl font-semibold tracking-wide">
                  Safe & Secure
                </h1>
                <p>Keep your Producing by playing</p>
              </BenefitDownloadGame>
              <BenefitDownloadGame>
                <Gamepad2 />
                <h1 className="text-xl font-semibold tracking-wide">
                  Install Game
                </h1>
                <p>Learn Run to install, and enjoy</p>
              </BenefitDownloadGame>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
