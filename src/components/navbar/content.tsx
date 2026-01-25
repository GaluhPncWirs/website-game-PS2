import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ListNavigation from "./listNavigasi/content";
import HamburgerMenu from "./hamburgerMenu/content";

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
    <nav
      className={`flex px-10 items-center gap-x-5 fixed w-full z-9999 text-slate-200 transition-all ${isScrolled ? `backdrop-blur-md shadow-md` : `bg-transparent`}`}
    >
      <img src="/images/global/logoApp.png" alt="Logo" className="w-52" />
      <div className="hidden font-semibold text-xl tracking-wide justify-around w-2/3 md:flex">
        <ListNavigation />
      </div>
      <div className="w-1/3 hidden justify-end gap-x-3 md:flex">
        <Input type="text" placeholder="Search Game" />
        <Button>Search</Button>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
