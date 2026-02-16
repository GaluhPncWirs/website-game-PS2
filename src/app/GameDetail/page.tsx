import { useGetDataGamePS2 } from "@/hooks/useDataGamePS2";
import RootLayout from "@/layout/rootLayout/content";
import {
  CalendarDays,
  Download,
  Expand,
  Heart,
  VenetianMask,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function GameDetail() {
  const { detailGame } = useParams();
  const { gamesPS2, isLoading } = useGetDataGamePS2();
  const detailGamePS2 = gamesPS2.find((match: any) => match.id === detailGame);

  return (
    <RootLayout
      titlePage="Game Description"
      descPage="Gameplay, story, and gaming experience offered."
    >
      {isLoading ? (
        <h1>Loading...</h1>
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
            to="/AllGames"
            className="mt-8 inline-block text-xl font-semibold tracking-wide bg-slate-800 text-slate-100 px-9 py-1.5 rounded-md"
          >
            Back
          </Link>
        </>
      )}
    </RootLayout>
  );
}
