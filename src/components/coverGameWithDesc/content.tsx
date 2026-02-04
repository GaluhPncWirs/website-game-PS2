import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export type propsCoverGameWithDesc = {
  srcImg: string;
  altImg: string;
  gameName: string;
  rating: string;
  genre: string;
  idGame: string;
};

export default function CoverGameWithDesc(props: propsCoverGameWithDesc) {
  const { srcImg, altImg, gameName, rating, genre, idGame } = props;
  return (
    <div className="min-w-40 md:min-w-60 h-full flex flex-col">
      <img src={srcImg} alt={altImg} className="w-full object-cover" />
      <div className="border border-slate-400 p-3 flex flex-col flex-1">
        <h1 className="text-xl tracking-wide font-semibold leading-snug line-clamp-1">
          {gameName}
        </h1>
        <div className="flex flex-col gap-y-1 mt-1.5 justify-center">
          <h2>{genre}</h2>
          <div className="flex items-center gap-x-1.5">
            <Heart size={20} />
            <h2>{rating}K</h2>|<h2>Rating</h2>
          </div>
        </div>
        <Link
          to={`/GameDetail/${idGame}`}
          className="w-full mt-3 bg-blue-500 text-slate-100 font-semibold
          tracking-wide text-center py-2 rounded-md"
        >
          Detail Game
        </Link>
      </div>
    </div>
  );
}
