import ConfigBios from "@/components/emulatorGuide/configBios/content";
import ConfigController from "@/components/emulatorGuide/configController/content";
import SetupEmulator from "@/components/emulatorGuide/setupEmulator/content";
import TipsTroubleshoot from "@/components/emulatorGuide/tipsTroubleshoot/content";
import RootLayout from "@/layout/rootLayout/content";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type titleAndDesc = {
  titlePage: string;
  descriptionPage: string;
};

export default function GuideEmulator() {
  const { allGuidesEmu } = useParams();
  const [titleAndDescPage, setTitleAndDescPage] = useState<titleAndDesc>({
    titlePage: "",
    descriptionPage: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!allGuidesEmu) return;
    if (allGuidesEmu === "SetupEmulator") {
      setTitleAndDescPage({
        titlePage: "Setup the Emulator",
        descriptionPage:
          "Learn how to install and set up the PS2 emulator on your device.",
      });
    } else if (allGuidesEmu === "ConfigureBiosPS2") {
      setTitleAndDescPage({
        titlePage: "Download PS2 BIOS",
        descriptionPage:
          "Understand how to legally obtain and use PS2 BIOS for emulation.",
      });
    } else if (allGuidesEmu === "ControllerConfig") {
      setTitleAndDescPage({
        titlePage: "Controller Configuration",
        descriptionPage:
          "Configure game controllers for the best PS2 gaming experience.",
      });
    } else if (allGuidesEmu === "TroubleshootTips") {
      setTitleAndDescPage({
        titlePage: "Troubleshooting Tips",
        descriptionPage:
          "Fix common emulator issues and improve game performance.",
      });
    } else {
      setTitleAndDescPage({
        titlePage: "",
        descriptionPage: "",
      });
    }
  }, [allGuidesEmu]);

  return (
    <RootLayout
      titlePage={titleAndDescPage.titlePage}
      descPage={titleAndDescPage.descriptionPage}
    >
      {allGuidesEmu === "SetupEmulator" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Setup emulator
          </h1>
          <SetupEmulator />
        </>
      ) : allGuidesEmu === "ConfigureBiosPS2" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Configure bios PS2 tutorial
          </h1>
          <ConfigBios />
        </>
      ) : allGuidesEmu === "ControllerConfig" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Controller configuration tutorial
          </h1>
          <ConfigController />
        </>
      ) : allGuidesEmu === "TroubleshootTips" ? (
        <>
          <h1 className="text-3xl tracking-wide font-semibold mb-7">
            Troubleshoot Tips
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
