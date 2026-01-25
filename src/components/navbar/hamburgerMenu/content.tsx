import { useEffect, useRef, useState } from "react";
import ListNavigation from "../listNavigasi/content";

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
        setIsCheked(false);
      }
    }

    document.addEventListener("click", handleClickOutsideNavbar);

    return () => {
      document.removeEventListener("click", handleClickOutsideNavbar);
    };
  }, [isCheked]);

  return (
    <div className="md:hidden" ref={containerRef}>
      <div className="absolute right-7 top-7 flex items-center gap-x-3">
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
        className={`grid grid-cols-2 absolute place-items-center h-64 -z-10 transition-all duration-300 text-xl font-semibold w-full bg-amber-600 left-0 top-0 ${isCheked ? `translate-y-0 pt-10` : `-translate-y-full`}`}
      >
        <ListNavigation />
      </div>
    </div>
  );
}
