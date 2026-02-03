import { getDataGamePS2 } from "@/lib/firebase/services";
import { useEffect, useState } from "react";

export function useGetDataGamePS2() {
  const [gamesPS2, setGamePS2] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function handleGetData() {
      try {
        setIsLoading(true);
        const getData = await getDataGamePS2();
        if (isMounted) {
          setGamePS2(getData);
        }
      } catch (error) {
        console.error("gagal ambil data", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    handleGetData();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    gamesPS2,
    isLoading,
  };
}
