import { Button } from "@/components/ui/button";
import { useFilterGames } from "@/store/useFilterGames/state";
import { useFiltersActive } from "@/store/useFiltersActive/state";
import { useGetDataPS2 } from "@/store/useGetDataPS2/state";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function TagsGames() {
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const dataGames = useGetDataPS2((state) => state.dataGames);
  const handleByTagGame = useFilterGames((state) => state.useHandleTagGame);
  const [activeAlphabet, setActiveAlphabet] = useState<string | null>(null);
  const { disabledFilter, setDisabledFilter } = useFiltersActive(
    useShallow((state) => ({
      disabledFilter: state.disabledFilter,
      setDisabledFilter: state.setDisabledFilter,
    })),
  );
  const isDisabled = disabledFilter !== null && disabledFilter !== "tags";

  useEffect(() => {
    if (activeAlphabet) {
      handleByTagGame(dataGames, activeAlphabet);
    } else {
      handleByTagGame(dataGames, null);
    }
  }, [handleByTagGame, dataGames, activeAlphabet]);

  return (
    <div className="border border-slate-400 bg-slate-100">
      <h2 className="text-xl font-medium border-b border-b-slate-400 px-5 py-2 bg-slate-300">
        Tags
      </h2>
      <div
        className={`grid grid-cols-5 gap-1.5 p-3 ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
        onClick={() => setDisabledFilter("tags")}
      >
        {alphabeth.map((item: string) => {
          const isActive = activeAlphabet === item;
          return (
            <Button
              key={item}
              className={`font-semibold text-lg ${isActive ? `bg-slate-600` : `bg-slate-400`}`}
              onClick={() =>
                setActiveAlphabet((prev) => (prev === item ? null : item))
              }
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
