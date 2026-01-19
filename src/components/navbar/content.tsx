import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScrolled() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div
      className={`flex px-10 items-center gap-x-5 fixed w-full z-9999 text-slate-200 transition-all ${isScrolled ? `backdrop-blur-md shadow-md` : `bg-transparent`}`}
    >
      <img src="/images/global/logoApp.png" alt="Logo" className="w-52" />
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
