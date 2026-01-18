import CoverGames, {
  type propsCoverGame,
} from "@/components/coverGames/content";
import RootLayout from "../../layout/rootLayout/content";

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
        <div className="mt-5 grid grid-cols-4 place-content-center place-items-center gap-5">
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
      </div>
    </RootLayout>
  );
}
// "/images/homePage/ps2_godofwar2.jpg"
