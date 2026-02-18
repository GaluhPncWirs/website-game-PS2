import StepSetupGuidesPS2 from "@/layout/stepSetupGuidesPS2/content";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConfigBios() {
  return (
    <>
      <StepSetupGuidesPS2
        numberStep="1"
        srcImg="/images/emulatorGuide/setupBIOS/download_BIOS.jpeg"
        altImg="Tutorial Setup BIOS"
      >
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
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="2"
        srcImg="/images/emulatorGuide/setupEmulator/settingBios.png"
        altImg="Tutorial Setup BIOS"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Configure the BIOS
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Launch PCSX2, then go through the initial setup wizzard to configure
          the BIOS, you will need a PS2 BIOS file, which you can dump from your
          own console (detaild instruction are avaliable in th emulator guide)
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="3"
        srcImg="/images/emulatorGuide/setupEmulator/chooseBios.png"
        altImg="Tutorial Setup BIOS"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Configure the BIOS
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          accusantium alias! Dolores rerum officia vel nobis beatae error magni
          labore quas accusantium expedita odit eligendi eius corrupti,
          molestiae vitae deserunt?
        </p>
      </StepSetupGuidesPS2>
    </>
  );
}
