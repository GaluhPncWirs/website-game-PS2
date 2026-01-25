import { Link } from "react-router-dom";

export default function ListNavigation() {
  return (
    <>
      <Link to="/HomePage" className="cursor-pointer">
        Home
      </Link>
      <Link to="/AllGames" className="cursor-pointer">
        All Games
      </Link>
      <Link to="/EmulatorGuide" className="cursor-pointer">
        Emulator Guide
      </Link>
      <Link to="/Contact" className="cursor-pointer">
        Contact
      </Link>
    </>
  );
}
