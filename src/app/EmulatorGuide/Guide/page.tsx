import ConfigBios from "@/components/emulatorGuide/configBios/content";
import ConfigController from "@/components/emulatorGuide/configController/content";
import SetupEmulator from "@/components/emulatorGuide/setupEmulator/content";
import TipsTroubleshoot from "@/components/emulatorGuide/tipsTroubleshoot/content";
import RootLayout from "@/layout/rootLayout/content";
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
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Setup Emulator PCSX2
          </h1>
          <SetupEmulator />
        </>
      ) : allGuidesEmu === "ConfigureBiosPS2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial Configure Bios PS2
          </h1>
          <ConfigBios />
        </>
      ) : allGuidesEmu === "ControllerConfig" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial Controller Config
          </h1>
          <ConfigController />
        </>
      ) : allGuidesEmu === "TroubleshootTips" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial Troubleshoot Tips
          </h1>
          <TipsTroubleshoot />
        </>
      ) : null}
      <Link
        to="/EmulatorGuide"
        className="bg-slate-700 text-xl text-white text-center rounded-md py-1 px-8 mt-8 inline-block"
      >
        Back
      </Link>
    </RootLayout>
  );
}
