import CoverGames from "@/components/coverGames/content";
import RootLayout from "../../layout/rootLayout/content";
import {
  Download,
  Gamepad2,
  GitCompareArrows,
  SearchCheck,
} from "lucide-react";
import BenefitDownloadGame from "@/layout/benefitDownload/content";
import { useHandlePagination } from "@/store/usePageDataGame/state";
import { Link } from "react-router-dom";
import CardPS2Emulator from "@/layout/cardPS2Emulator/content";
import { useMediaQuery } from "@/hooks/mediaQuery";
import GamesPopular from "@/components/gamesPopular/content";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useEffect } from "react";

export default function HomePage() {
  const chunkedGamesPopular = useHandlePagination(
    (state) => state.dataGamesPopular,
  );
  const isMediaQuery = useMediaQuery();
  const handleGetData = useGetDataPS2((state) => state.setHandleGetData);

  useEffect(() => {
    let isMounted = true;
    handleGetData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [handleGetData]);

  return (
    <RootLayout
      titlePage="Download Games PS2 Here !!!"
      descPage="Classic playStation 2 games, ready to play on your PC or handphone"
    >
      <h1 className="font-semibold tracking-wide text-3xl">Popular Games</h1>

      <GamesPopular itemPerPage={isMediaQuery ? 2 : 4}>
        <div className="w-fit">
          {chunkedGamesPopular.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-3"
            >
              {row.map((item, j) => (
                <CoverGames
                  key={j}
                  srcImg={item.url_image}
                  altImg={item.cleanTitle}
                  rating={item.rating}
                  genre={item.genre}
                  idGame={item.id}
                />
              ))}
            </div>
          ))}
        </div>
      </GamesPopular>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold tracking-wide">PS2 Emulators</h1>
        <p className="mt-3 text-lg">
          Select form a list of popular emulators that support playing
          playstation 2 games on multiple platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 gap-5">
          <CardPS2Emulator
            emulatorImg="/images/emulatorGuidePage/PCSX2-logo.png"
            emulatorAlt="PCSX2"
            nameEmulator="PCSX2"
            descEmulator="The most popular and compatible PS2 emulator for multiple
                    platforms."
          >
            <Link
              to="https://pcsx2.net/downloads/"
              target="_blank"
              className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
            >
              Download
            </Link>
          </CardPS2Emulator>
          <CardPS2Emulator
            emulatorImg="/images/emulatorGuidePage/aetherSX2-logo.png"
            emulatorAlt="AetherSX2"
            nameEmulator="AetherSX2"
            descEmulator="Android exclusive emulator focused on high compability and performance"
          >
            <Link
              to="https://pcsx2.net/downloads/"
              target="_blank"
              className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
            >
              Download
            </Link>
          </CardPS2Emulator>
          <CardPS2Emulator
            emulatorImg="/images/emulatorGuidePage/damonPS2-logo.png"
            emulatorAlt="DamonPS2"
            nameEmulator="DamonPS2"
            descEmulator="the most popular PS2 emulator offering the best compability"
          >
            <Link
              to="https://pcsx2.net/downloads/"
              target="_blank"
              className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
            >
              Download
            </Link>
          </CardPS2Emulator>
        </div>
      </div>

      <div className="mt-10">
        <div className="instructionSection text-slate-100 tracking-wide h-40 rounded-t-md flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-semibold text-3xl">Easy Downloads Game PS2</h1>
          <h3 className="text-lg font-medium px-5">
            Revive Your Gaming Memories, Now Easier Than Ever
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
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
    </RootLayout>
  );
}
