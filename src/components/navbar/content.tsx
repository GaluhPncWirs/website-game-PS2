import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NavigationBar() {
  return (
    <div className="flex px-10 items-center gap-x-5 fixed w-full bg-transparent backdrop-blur-lg z-9999">
      <img src="/images/navbar/logoApp.png" alt="Logo" className="w-52" />
      <ul className="flex font-semibold text-xl tracking-wide justify-around w-2/3">
        <li>Home</li>
        <li>All Games</li>
        <li>Guide Install</li>
        <li>Contact</li>
      </ul>
      <div className="w-1/3 flex justify-end gap-x-3">
        <Input type="text" placeholder="Search Game" />
        <Button>Search</Button>
      </div>
    </div>
  );
}
