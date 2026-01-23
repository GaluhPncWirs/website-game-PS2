import type React from "react";

type propsPS2EmuOverview = {
  emulatorImg: string;
  emulatorAlt: string;
  nameEmulator: string;
  descEmulator: string;
  children: React.ReactNode;
};

export default function CardPS2Emulator(props: propsPS2EmuOverview) {
  const { emulatorImg, emulatorAlt, nameEmulator, descEmulator, children } =
    props;
  return (
    <div className="w-xs h-full flex flex-col">
      <img
        src={emulatorImg}
        alt={emulatorAlt}
        className="w-full h-44 bg-slate-300 object-contain"
      />
      <div className="border border-slate-300 border-t-0 p-5 flex flex-col flex-1 gap-y-5 items-center">
        <div>
          <h2 className="text-xl font-semibold tracking-wide mb-2">
            {nameEmulator}
          </h2>
          <p className="text-justify">{descEmulator}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
