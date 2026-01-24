import type React from "react";

export default function StepSetupEmulator({
  numberStep,
  children,
}: {
  numberStep: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-x-5">
      <div className="basis-[7%] lg:basis-[5%] flex justify-center">
        <div className="w-1 h-full bg-black rounded-t-lg rounded-b-lg flex flex-col items-center">
          <div className="size-10 rounded-full bg-blue-500 mt-7 flex items-center justify-center text-slate-100 text-2xl font-semibold">
            {numberStep}
          </div>
        </div>
      </div>
      <div className="basis-full mt-7 flex gap-x-10">{children}</div>
    </div>
  );
}
