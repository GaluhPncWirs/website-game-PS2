import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [isMediaQuery, setIsMediaQuery] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    function handlerMediaQuery(event: MediaQueryListEvent | MediaQueryList) {
      setIsMediaQuery(event.matches);
    }
    handlerMediaQuery(mediaQuery);
    mediaQuery.addEventListener("change", handlerMediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handlerMediaQuery);
    };
  }, []);

  return isMediaQuery;
}
