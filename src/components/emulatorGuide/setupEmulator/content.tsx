import StepSetupGuidesPS2 from "@/layout/stepSetupGuidesPS2/content";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function SetupEmulator() {
  return (
    <>
      <StepSetupGuidesPS2
        numberStep="1"
        srcImg="/images/emulatorGuide/setupEmulator/download-PCSX2.jpeg"
        altImg="Tutorial Setup Emulator"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Download and install PCSX2
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Go to the PCSX2 official site and download the latest version of the
          emulator for you operating system. run the installer and follow the on
          screen instructions to install PCSX2 on your PC
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
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="2"
        srcImg="/images/emulatorGuide/setupEmulator/settingBios.png"
        altImg="Tutorial Setup Emulator"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Go to setting and choose BIOS
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          officia praesentium corporis dolorem totam quo est adipisci recusandae
          dicta, nulla temporibus perspiciatis consectetur architecto tenetur
          consequuntur, vel ipsam dolor dolores?
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="3"
        srcImg="/images/emulatorGuide/setupEmulator/chooseBios.png"
        altImg="Tutorial Setup Emulator"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Configure the emulator
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Launch PCSX2, then go through the initial setup wizzard to configure
          the BIOS, you will need a PS2 BIOS file, which you can dump from your
          own console (detaild instruction are avaliable in th emulator guide)
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
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="4"
        srcImg="/images/emulatorGuide/setupEmulator/addGameToEmulator.png"
        altImg="Tutorial Setup Emulator"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Add your PS2 game ISO file
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Once PCSX2 is ready, click on settings {">"} game list click button
          "add" and select the PS2 game with extension ".ISO" file that you have
          download from our website the game ISO will be added to the emulator
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="5"
        srcImg="/images/emulatorGuide/setupEmulator/resultInGame.png"
        altImg="Tutorial Setup Emulator"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Start playing your game
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Your PS2 game will appear in collection game and click those game you
          can now enjoy playing it on your PC through PCSX2.
        </p>
      </StepSetupGuidesPS2>
    </>
  );
}
