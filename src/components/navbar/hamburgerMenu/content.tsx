import { useEffect, useRef, useState } from "react";
import ListNavigation from "../listNavigasi/content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HamburgerMenu() {
  const [isCheked, setIsCheked] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isCheked) return;
    function handleClickOutsideNavbar(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsCheked(true);
      }
    }

    document.addEventListener("click", handleClickOutsideNavbar);

    return () => {
      document.removeEventListener("click", handleClickOutsideNavbar);
    };
  }, [isCheked]);

  return (
    <div className="md:hidden" ref={containerRef}>
      <div className="absolute right-7 top-6 flex items-center gap-x-3">
        <div className="hamburgerMenu flex flex-col h-5 justify-between">
          <input
            type="checkbox"
            className="size-5 absolute z-20 cursor-pointer opacity-0"
            onClick={() => setIsCheked((prev) => !prev)}
          />
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
        </div>
      </div>

      <div
        className={`absolute grid grid-cols-3 px-6 gap-y-10 place-content-center h-60 -z-10 transition-all duration-300 text-xl font-semibold w-full bg-blue-400 left-0 top-0 ${isCheked ? `translate-y-0 pt-16` : `-translate-y-full`}`}
      >
        <ListNavigation />
      </div>
    </div>
  );
}
