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
import { dataGamesPopular } from "@/data/dataGame/datas";
import AllGamePS2 from "@/layout/allGamePS2/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import GenreGames from "@/components/genreGames/content";

export default function HomePage() {
  const chunkedGames = useHandlePagination((state) => state.dataGames);
  return (
    <RootLayout
      titlePage="Download Games PS2 Here !!!"
      descPage="Classic playStation 2 games, ready to play on your PC or handphone"
    >
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

        <AllGamePS2 itemPerPage={3}>
          <div className="flex gap-x-5 my-7">
            <div className="basis-1/5">
              <GenreGames />
            </div>
            <div className="basis-4/5 flex flex-col gap-y-5">
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
        </AllGamePS2>

        <div className="mt-10">
          <div className="instructionSection text-slate-100 tracking-wide h-40 rounded-t-md flex flex-col justify-center items-center gap-y-3">
            <h1 className="font-semibold text-3xl">Easy Downloads Game PS2</h1>
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
    </RootLayout>
  );
}
