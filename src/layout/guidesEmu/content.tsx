import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type React from "react";

export default function GuidesEmulator({ children }: React.PropsWithChildren) {
  return (
    <div className="w-60 bg-slate-100 p-5 flex flex-col gap-y-3 h-full">
      {children}
      <Button>
        Learn More <ArrowRight />
      </Button>
    </div>
  );
}
