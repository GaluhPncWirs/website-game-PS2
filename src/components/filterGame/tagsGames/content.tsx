import { Button } from "@/components/ui/button";
import { useFilterGames } from "@/store/useFilterGames/state";
import type { dataGamePS2 } from "@/types/dataGamePS2";
import { useEffect, useState } from "react";

export default function TagsGames({ gamesPS2 }: { gamesPS2: dataGamePS2[] }) {
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const handleByTagGame = useFilterGames((state) => state.useHandleTagGame);
  const [activeAlphabet, setActiveAlphabet] = useState<string | null>(null);

  useEffect(() => {
    if (!activeAlphabet) return;
    handleByTagGame(gamesPS2, activeAlphabet);
  }, [gamesPS2, activeAlphabet]);

  return (
    <div className="border border-slate-400 bg-slate-100">
      <h2 className="text-xl font-medium border-b border-b-slate-400 px-5 py-2 bg-slate-300">
        Tags
      </h2>
      <div className="grid grid-cols-5 gap-1.5 p-3">
        {alphabeth.map((item: string) => {
          const isActive = activeAlphabet === item;
          return (
            <Button
              key={item}
              className={`font-semibold text-lg ${isActive ? `bg-slate-600` : `bg-slate-400`}`}
              onClick={() => setActiveAlphabet(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
