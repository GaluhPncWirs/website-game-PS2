import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type propsCoverGame = {
  srcImg: string;
  altImg: string;
  rating: string;
  genre: string;
  idGame: string;
};

export default function CoverGames(props: propsCoverGame) {
  const { srcImg, altImg, rating, genre, idGame } = props;
  return (
    <Link
      to={`/HomePage/GameDetail/${idGame}`}
      className="relative cursor-pointer group min-w-40 md:min-w-60"
    >
      <img src={srcImg} alt={altImg} className="w-full" />
      <div className="flex justify-around absolute font-semibold w-full bottom-0 py-2 text-slate-100 bg-black/50 transition-all group-hover:bg-black/90">
        <div className="flex items-center gap-x-2">
          <Heart />
          <h2>{rating}K</h2>
        </div>
        <h2>{genre}</h2>
      </div>
    </Link>
  );
}
