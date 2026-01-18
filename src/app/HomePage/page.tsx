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
            <div>
              <div>untuk hasilsnya</div>
            </div>
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
