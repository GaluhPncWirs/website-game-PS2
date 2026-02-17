import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import RootLayout from "@/layout/rootLayout/content";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import {
  CalendarDays,
  Download,
  Expand,
  Heart,
  VenetianMask,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function GameDetail() {
  const { pagePath, detailGame } = useParams();
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const detailGamePS2 = gamesPS2.find(
    (match: dataGamePS2) => match.id === detailGame,
  );

  return (
    <RootLayout
      titlePage="Game Description"
      descPage="Gameplay, story, and gaming experience offered."
    >
      {isLoading ? (
        <>
          <div className="flex gap-5 flex-col items-center md:items-start md:flex-row animate-pulse">
            <div className="w-11/12 md:w-1/3 bg-slate-300 rounded-md h-105" />
            <div className="w-full md:w-2/3">
              <h1 className="w-1/2 h-8 bg-slate-300 rounded-md"></h1>
              <div className="mt-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-1/6 h-8 bg-slate-300 rounded-md"></div>|
                  <div className="w-1/5 h-8 bg-slate-300 rounded-md"></div>|
                  <div className="w-1/6 h-8 bg-slate-300 rounded-md"></div>|
                  <div className="w-1/4 h-8 bg-slate-300 rounded-md"></div>|
                </div>
                <div className="mt-3">
                  <h2 className="w-1/4 h-8 bg-slate-300 rounded-md mb-5"></h2>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p
                      key={i}
                      className="w-full h-5 bg-slate-300 rounded-md mb-2"
                    ></p>
                  ))}
                </div>
                <div className="w-48 rounded-md mt-5 bg-slate-300 h-10"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-slate-300 rounded-md w-32 h-10"></div>
        </>
      ) : (
        <>
          <div className="flex gap-5 flex-col items-center md:items-start md:flex-row">
            <img
              src={detailGamePS2.url_image}
              alt={detailGamePS2.cleanTitle}
              className="object-contain w-11/12 md:w-1/3"
            />
            <div className="w-full md:w-2/3">
              <h1 className="text-2xl font-semibold tracking-wide">
                {detailGamePS2.cleanTitle}
              </h1>
              <div className="mt-3">
                <div className="flex items-center gap-2 flex-wrap font-medium">
                  <h2 className="flex items-center gap-1.5">
                    <VenetianMask size={20} />
                    <span>Genre: {detailGamePS2.genre}</span>|
                  </h2>
                  <h2 className="flex items-center gap-1.5">
                    <Heart size={17} />
                    <span>Rating: {detailGamePS2.rating}</span>|
                  </h2>
                  <h2 className="flex items-center gap-1.5">
                    <Expand size={17} />
                    <span>Size game: {detailGamePS2.size}</span>|
                  </h2>
                  <h2 className="flex items-center gap-1.5">
                    <CalendarDays size={17} />
                    <span>
                      Game date added:{" "}
                      {detailGamePS2.date.replace(/\s*\d{2}:\d{2}/, "")}
                    </span>
                  </h2>
                </div>
                <div className="mt-3">
                  <h2 className="text-lg font-medium">Game Description</h2>
                  <p className="text-justify mt-2">
                    {detailGamePS2.thegamesdbDescription}
                  </p>
                </div>
                <a
                  href={detailGamePS2.url}
                  rel="noopener noreferrer"
                  download
                  className="flex justify-center items-center gap-3 bg-blue-500 w-48 py-2 rounded-md mt-5 text-slate-100"
                >
                  <span className="font-semibold tracking-wide">
                    Download Now
                  </span>{" "}
                  <Download size={20} />
                </a>
              </div>
            </div>
          </div>
          <Link
            to={
              pagePath === "HomePage"
                ? "/HomePage"
                : pagePath === "AllGames"
                  ? "/AllGames"
                  : "#"
            }
            className="mt-8 inline-block text-xl font-semibold tracking-wide bg-slate-800 text-slate-100 px-9 py-1.5 rounded-md"
          >
            Back
          </Link>
        </>
      )}
    </RootLayout>
  );
}
