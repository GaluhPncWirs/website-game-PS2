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
    <div className="min-w-60">
      <img src={srcImg} alt={altImg} className="w-fit" />
      <div className="border border-slate-400 p-3">
        <h1 className="text-xl tracking-wide font-semibold leading-snug">
          {gameName}
        </h1>
        <div className="grid grid-cols-2 gap-3 w-2/3 mt-3 place-items-center">
          <div className="bg-blue-400 text-center rounded-md py-1 px-3 font-semibold">
            <h1>Hype</h1>
          </div>
          <h2>{genre}</h2>
          <div className="flex items-center gap-x-2">
            <Heart />
            <h2>{rating}K</h2>
          </div>

          <h2>Rating</h2>
        </div>
        <Button className="w-full mt-5">Download</Button>
      </div>
    </div>
  );
}
