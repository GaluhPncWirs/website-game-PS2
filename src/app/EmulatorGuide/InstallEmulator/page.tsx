import SetupEmulator from "@/components/emulatorGuide/setupEmulator/content";
import RootLayout from "@/layout/rootLayout/content";
import { Link, useParams } from "react-router-dom";

export default function InstallEmulator() {
  const { installEmu } = useParams();
  return (
    <RootLayout
      titlePage={`How to install PS2 game on ${installEmu}`}
      descPage={`Follow this step-by-step guide to install the ${installEmu} emulator and start playing your favorite PS2 game`}
    >
      {installEmu === "PCSX2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial install PCSX2
          </h1>
          <SetupEmulator />
        </>
      ) : installEmu === "AetherSX2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial install AetherSX2
          </h1>
          <SetupEmulator />
        </>
      ) : installEmu === "DamonPS2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Tutorial install DamonPS
          </h1>
          <SetupEmulator />
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
