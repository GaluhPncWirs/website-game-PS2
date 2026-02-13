import { useEffect, useState } from "react";
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
      className={`flex items-center px-5 md:justify-around gap-x-5 fixed w-full z-9999 text-slate-200 transition-all ${isScrolled ? `backdrop-blur-md shadow-md` : `bg-transparent`}`}
    >
      <img src="/images/global/logoApp.png" alt="Logo" className="w-52" />
      <HamburgerMenu />
      <div className="hidden font-semibold text-md justify-around items-center w-3/4 md:flex lg:text-xl">
        <ListNavigation />
      </div>
    </nav>
  );
}
