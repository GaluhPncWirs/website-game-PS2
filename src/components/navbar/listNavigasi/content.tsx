import { BookKey, Contact2, Gamepad2, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function ListNavigation() {
  return (
    <>
      <Link
        to="/HomePage"
        className="cursor-pointer flex gap-x-2 items-center text-black "
      >
        <Home />
        <span>Home</span>
      </Link>
      <Link
        to="/AllGames"
        className="cursor-pointer flex gap-x-2 items-center text-black"
      >
        <Gamepad2 />
        <span>All Games</span>
      </Link>
      <Link
        to="/EmulatorGuide"
        className="cursor-pointer flex gap-x-2 items-center text-black"
      >
        <BookKey />
        <span>Emulator Guide</span>
      </Link>
      <Link
        to="/Contact"
        className="cursor-pointer flex gap-x-2 items-center text-black"
      >
        <Contact2 />
        <span>Contact</span>
      </Link>
    </>
  );
}
