import SetupEmulator from "@/components/emulatorGuide/setupEmulator/content";
import RootLayout from "@/layout/rootLayout/content";
import StepSetupEmulator from "@/layout/stepSetupEmulator/content";
import { Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function GuideEmulator() {
  const { allGuidesEmu } = useParams();
  return (
    <RootLayout
      titlePage={
        allGuidesEmu === "SetupEmulator"
          ? "Setup the Emulator"
          : allGuidesEmu === "ConfigureBiosPS2"
            ? "Download PS2 BIOS"
            : allGuidesEmu === "ControllerConfig"
              ? "Controller Configuration"
              : allGuidesEmu === "TroubleshootTips"
                ? "Troubleshooting Tips"
                : ""
      }
      descPage={
        allGuidesEmu === "SetupEmulator"
          ? "Learn how to install and set up the PS2 emulator on your device."
          : allGuidesEmu === "ConfigureBiosPS2"
            ? "Understand how to legally obtain and use PS2 BIOS for emulation."
            : allGuidesEmu === "ControllerConfig"
              ? "Configure game controllers for the best PS2 gaming experience."
              : allGuidesEmu === "TroubleshootTips"
                ? "Fix common emulator issues and improve game performance."
                : ""
      }
    >
      {allGuidesEmu === "SetupEmulator" ? (
        <SetupEmulator />
      ) : allGuidesEmu === "ConfigureBiosPS2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial ConfigureBiosPS2
          </h1>
          <StepSetupEmulator numberStep="1">
            <div className="w-2/5">
              <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
                Download PS2 BIOS
              </h1>
              <p className="font-semibold mt-3 text-[#393E46] text-justify">
                First, download the PS2 BIOS using the button below.
              </p>
              <Link
                to="https://www.retrostic.com/bios/pcsx2-playstation-2"
                target="_blank"
                className="flex items-center justify-center bg-blue-500 text-slate-100 px-5 py-2 font-semibold gap-x-3 rounded-md mt-3 w-44"
              >
                <Download />
                <div>
                  <h3 className="text-lg">Get Bios</h3>
                  <h4 className="text-sm">Free Download</h4>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <img
                src="/images/emulatorGuidePage/guides/download_BIOS.jpeg"
                alt="Tutorial Setup BIOS"
                className="rounded-md max-h-64 bg-top object-contain"
              />
            </div>
          </StepSetupEmulator>
          <StepSetupEmulator numberStep="2">
            <div className="w-2/5">
              <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
                Configure the BIOS
              </h1>
              <p className="font-semibold mt-3 text-[#393E46] text-justify">
                Launch PCSX2, then go through the initial setup wizzard to
                configure the BIOS, you will need a PS2 BIOS file, which you can
                dump from your own console (detaild instruction are avaliable in
                th emulator guide)
              </p>
              <Link
                to="https://www.retrostic.com/bios/pcsx2-playstation-2"
                target="_blank"
                className="flex items-center justify-center bg-blue-500 text-slate-100 px-5 py-2 font-semibold gap-x-3 rounded-md mt-3 w-44"
              >
                <Download />
                <div>
                  <h3 className="text-lg">Get Bios</h3>
                  <h4 className="text-sm">Free Download</h4>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <img
                src="/images/emulatorGuidePage/setupEmulator/settingBios.png"
                alt="Tutorial Setup BIOS"
                className="rounded-md max-h-64 bg-top object-contain"
              />
              <img
                src="/images/emulatorGuidePage/setupEmulator/chooseBios.png"
                alt="Tutorial Setup BIOS"
                className="w-3/5 rounded-md max-h-64 bg-top object-contain"
              />
            </div>
          </StepSetupEmulator>
          <Link
            to="/EmulatorGuide"
            className="bg-slate-700 text-xl text-white text-center rounded-md py-1 px-8 mt-8 inline-block"
          >
            Back
          </Link>
        </>
      ) : allGuidesEmu === "ControllerConfig" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial ControllerConfig
          </h1>
          <Link
            to="/EmulatorGuide"
            className="bg-slate-700 text-xl text-white text-center rounded-md py-1 px-8 mt-8 inline-block"
          >
            Back
          </Link>
        </>
      ) : allGuidesEmu === "TroubleshootTips" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial TroubleshootTips
          </h1>
          <Link
            to="/EmulatorGuide"
            className="bg-slate-700 text-xl text-white text-center rounded-md py-1 px-8 mt-8 inline-block"
          >
            Back
          </Link>
        </>
      ) : null}
    </RootLayout>
  );
}
