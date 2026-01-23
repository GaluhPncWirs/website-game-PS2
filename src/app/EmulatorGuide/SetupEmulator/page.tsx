import RootLayout from "@/layout/rootLayout/content";
import StepSetupEmulator from "@/layout/stepSetupEmulator/content";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function SetupEmulator() {
  return (
    <RootLayout
      titlePage="How to install PS2 game on PCSX2"
      descPage="Follow this step-by-step guide to setup the PCSX2 emulator and start playing your favorite PS2 game on your PC."
    >
      <h1 className="text-3xl tracking-wide font-semibold mb-7">
        Tutorial install PCSX2
      </h1>
      <StepSetupEmulator numberStep="1">
        <div className="w-2/5">
          <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
            Download and install PCSX2
          </h1>
          <p className="font-semibold mt-3 text-[#393E46] text-justify">
            Go to the PCSX2 official site and download the latest version of the
            emulator for you operating system. run the installer and follow the
            on screen instructions to install PCSX2 on your PC
          </p>
          <Link
            to="https://pcsx2.net/downloads/"
            target="_blank"
            className="flex items-center justify-center bg-blue-500 text-slate-100 px-5 py-2 font-semibold gap-x-3 rounded-md mt-3 w-44"
          >
            <Download />
            <div>
              <h3 className="text-lg">Get PCSX2</h3>
              <h4 className="text-sm">Free Download</h4>
            </div>
          </Link>
        </div>
        <img
          src="/images/emulatorGuidePage/setupEmulator/download-PCSX2.jpeg"
          alt="Tutorial Setup Emulator"
          className="w-3/5 rounded-md min-w-3/5 max-h-64 bg-top object-contain"
        />
      </StepSetupEmulator>
      <StepSetupEmulator numberStep="2">
        <div className="w-2/5">
          <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
            Download and install PCSX2
          </h1>
          <p className="font-semibold mt-3 text-[#393E46] text-justify">
            Go to the PCSX2 official site and download the latest version of the
            emulator for you operating system. run the installer and follow the
            on screen instructions to install PCSX2 on your PC
          </p>
        </div>
        <img
          src="/images/emulatorGuidePage/setupEmulator/settingBios.png"
          alt="Tutorial Setup Emulator"
          className="w-3/5 rounded-md min-w-3/5 max-h-64 bg-top object-contain"
        />
      </StepSetupEmulator>
      <StepSetupEmulator numberStep="3">
        <div className="w-2/5">
          <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
            Download Bios PS2
          </h1>
          <p className="font-semibold mt-3 text-[#393E46] text-justify">
            Go to the PCSX2 official site and download the latest version of the
            emulator for you operating system. run the installer and follow the
            on screen instructions to install PCSX2 on your PC
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
        <img
          src="/images/emulatorGuidePage/setupEmulator/chooseBios.png"
          alt="Tutorial Setup Emulator"
          className="w-3/5 rounded-md min-w-3/5 max-h-64 bg-top object-contain"
        />
      </StepSetupEmulator>
    </RootLayout>
  );
}
