import { Heart } from "lucide-react";

export type propsCoverGame = {
  srcImg: string;
  altImg: string;
  rating: string;
  genre: string;
};

export default function CoverGames(props: propsCoverGame) {
  const { srcImg, altImg, rating, genre } = props;
  return (
    <div className="relative min-w-60 cursor-pointer group">
      <img src={srcImg} alt={altImg} className="w-full" />
      <div className="flex justify-around absolute font-semibold w-full bottom-0 py-2 text-slate-100 bg-black/50 transition-all group-hover:bg-black/90">
        <div className="flex items-center gap-x-2">
          <Heart />
          <h2>{rating}K</h2>
        </div>
        <h2>{genre}</h2>
      </div>
    </div>
  );
}
