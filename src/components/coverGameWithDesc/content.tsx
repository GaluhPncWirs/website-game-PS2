import { Heart } from "lucide-react";
import { Button } from "../ui/button";

export type propsCoverGameWithDesc = {
  srcImg: string;
  altImg: string;
  gameName: string;
  rating: string;
  genre: string;
};

export default function CoverGameWithDesc(props: propsCoverGameWithDesc) {
  const { srcImg, altImg, gameName, rating, genre } = props;
  return (
    <div className="min-w-40 md:min-w-60 h-full flex flex-col">
      <img src={srcImg} alt={altImg} className="w-full object-cover" />
      <div className="border border-slate-400 p-3 flex flex-col flex-1">
        <h1 className="text-xl tracking-wide font-semibold leading-snug line-clamp-1">
          {gameName}
        </h1>
        <div className="flex flex-col gap-y-1 mt-1.5">
          <h2>{genre}</h2>
          <div className="flex items-center gap-x-2">
            <Heart />
            <h2>{rating}K</h2>
            <div className="h-full w-0.5 bg-slate-400" />
            <h2>Rating</h2>
          </div>
        </div>
        <Button className="w-full mt-3">Download</Button>
      </div>
    </div>
  );
}
