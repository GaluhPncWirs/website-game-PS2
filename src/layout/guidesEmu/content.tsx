import { ArrowRight } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export default function GuidesEmulator({
  children,
  guides,
}: {
  children: React.ReactNode;
  guides: string;
}) {
  return (
    <div className="w-52 sm:w-60 bg-slate-100 p-5 flex flex-col gap-y-3 h-full">
      {children}
      <Link
        to={`/EmulatorGuide/GuidesEmulator/${guides}`}
        className="flex bg-slate-700 text-white py-1.5 rounded-md justify-center items-center gap-2"
      >
        Learn More <ArrowRight />
      </Link>
    </div>
  );
}
