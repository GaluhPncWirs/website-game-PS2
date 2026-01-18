import type React from "react";

export default function BenefitDownloadGame({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="border border-slate-300 p-5 flex flex-col justify-center items-center gap-y-1.5 basis-1/4">
      {children}
    </div>
  );
}
