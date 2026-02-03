import { getDataGamePS2 } from "@/lib/firebase/services";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useEffect, useState } from "react";

export function useGetDataGamePS2() {
  const [gamesPS2, setGamePS2] = useState<dataGamePS2[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function handleGetData() {
      try {
        setIsLoading(true);
        const getData = await getDataGamePS2();
        setGamePS2(getData);
      } catch (error) {
        console.error("gagal ambil data", error);
      } finally {
        setIsLoading(false);
      }
    }
    handleGetData();
  }, []);

  return {
    gamesPS2,
    isLoading,
  };
}
