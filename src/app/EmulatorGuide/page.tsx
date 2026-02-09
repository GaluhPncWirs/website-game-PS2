import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import GuidesEmulator from "@/layout/guidesEmu/content";
import RootLayout from "@/layout/rootLayout/content";
import { Gamepad2, Monitor, Wrench } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import CardPS2Emulator from "@/layout/cardPS2Emulator/content";

export default function EmulatorGuide() {
  return (
    <>
      <RootLayout
        titlePage="Emulator Guide"
        descPage="Learn how to emulate playstation 2 games on your device, find the best emulators, setup instructions, and troubleshooting tips below"
      >
        <div>
          <h1 className="text-2xl font-semibold tracking-wide mb-3">
            PS2 Emulator Overview
          </h1>
          <p className="text-lg">
            Below are the top recommended emulators to play PS2 game. Each
            emulator has it`s own features and strengths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 gap-5">
            <CardPS2Emulator
              emulatorImg="/images/emulatorGuidePage/PCSX2-logo.png"
              emulatorAlt="PCSX2"
              nameEmulator="PCSX2"
              descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/windows.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/macOS.png"
                    alt="Windows"
                    className="size-8"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/linux.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
              </div>
              <Link
                to="/EmulatorGuide/InstallEmulator/PCSX2"
                className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
              >
                Setup Guide
              </Link>
            </CardPS2Emulator>
            <CardPS2Emulator
              emulatorImg="/images/emulatorGuidePage/aetherSX2-logo.png"
              emulatorAlt="AetherSX2"
              nameEmulator="AetherSX2"
              descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/windows.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/macOS.png"
                    alt="Windows"
                    className="size-8"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/linux.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/android.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/IOS.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
              </div>
              <Link
                to="/EmulatorGuide/InstallEmulator/AetherSX2"
                className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
              >
                Setup Guide
              </Link>
            </CardPS2Emulator>
            <CardPS2Emulator
              emulatorImg="/images/emulatorGuidePage/damonPS2-logo.png"
              emulatorAlt="DamonPS2"
              nameEmulator="DamonPS2"
              descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/android.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuidePage/IOS.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
              </div>
              <Link
                to="/EmulatorGuide/InstallEmulator/DamonPS2"
                className="w-full bg-slate-700 text-xl text-white text-center rounded-md py-2"
              >
                Setup Guide
              </Link>
            </CardPS2Emulator>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-2xl tracking-wider font-semibold">Guides</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-3 mt-5">
            <GuidesEmulator guides="SetupEmulator">
              <div className="flex items-center gap-x-5">
                <Monitor className="size-9" />
                <h2 className="text-lg font-semibold tracking-wide">
                  Setup the emulator
                </h2>
              </div>
              <p>Step-by-step emulator setup guide.</p>
            </GuidesEmulator>
            <GuidesEmulator guides="ConfigureBiosPS2">
              <div className="flex items-center gap-x-5">
                <img
                  src="/images/emulatorGuidePage/bios.png"
                  alt="Bios"
                  className="size-9"
                />
                <h2 className="text-lg font-semibold tracking-wide">
                  Download PS2 bios
                </h2>
              </div>
              <p>BIOS setup for PS2 emulator.</p>
            </GuidesEmulator>
            <GuidesEmulator guides="ControllerConfig">
              <div className="flex items-center gap-x-5">
                <Gamepad2 className="size-9" />
                <h2 className="text-lg font-semibold tracking-wide">
                  Controller config
                </h2>
              </div>
              <p>Set up controllers for smooth gameplay.</p>
            </GuidesEmulator>
            <GuidesEmulator guides="TroubleshootTips">
              <div className="flex items-center gap-x-5">
                <Wrench className="size-9" />
                <h2 className="text-lg font-semibold tracking-wide">
                  Troubleshoot tips
                </h2>
              </div>
              <p>Learn how to solve common emulator problems.</p>
            </GuidesEmulator>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-2xl tracking-wider font-semibold">FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="Bios PS2">
              <AccordionTrigger>
                Where can I download PS2 Bios ?
              </AccordionTrigger>
              <AccordionContent>
                Due to copyright restrictions, PS2 BIOS files cannot be legally
                downloaded from third-party websites. The only legal way to
                obtain a PS2 BIOS is by dumping it directly from your own
                PlayStation 2 console using appropriate tools. This ensures
                compliance with copyright laws and avoids legal issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tips using PS2">
              <AccordionTrigger>Tips for using PS2 Emulator</AccordionTrigger>
              <AccordionContent>
                Make sure you use a legal PS2 BIOS dumped from your own console.
                Always use the latest emulator version for better compatibility
                and performance. Adjust graphics settings according to your
                device specifications, enable speed hacks carefully, and
                regularly save your progress using both in-game saves and save
                states.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </RootLayout>
      <Outlet />
    </>
  );
}
