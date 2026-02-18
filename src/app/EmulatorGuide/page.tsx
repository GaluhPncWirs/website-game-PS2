import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import GuidesEmulator from "@/layout/guidesEmu/content";
import RootLayout from "@/layout/rootLayout/content";
import {
  Gamepad2,
  Monitor,
  MonitorCog,
  Smartphone,
  Wrench,
} from "lucide-react";
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
              emulatorImg="/images/global/PCSX2-logo.png"
              emulatorAlt="PCSX2"
              nameEmulator="PCSX2"
              descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuide/windows.png"
                    alt="Windows"
                    className="size-7"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuide/macOS.png"
                    alt="Windows"
                    className="size-8"
                  />
                </Button>
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuide/linux.png"
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
              emulatorImg="/images/global/aetherSX2-logo.png"
              emulatorAlt="AetherSX2"
              nameEmulator="AetherSX2"
              descEmulator="A powerful mobile PS2 emulator with high compatibility, solid performance, and broad customization options."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuide/android.png"
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
              emulatorImg="/images/global/damonPS2-logo.png"
              emulatorAlt="DamonPS2"
              nameEmulator="DamonPS2"
              descEmulator="A high-performance PS2 emulator with fast gameplay, hardware acceleration, and flexible graphics settings."
            >
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <img
                    src="/images/emulatorGuide/android.png"
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
                <MonitorCog className="size-9" />

                <h2 className="text-lg font-semibold tracking-wide">
                  Setup the emulator
                </h2>
              </div>
              <p>Step-by-step emulator setup guide.</p>
            </GuidesEmulator>
            <GuidesEmulator guides="ConfigureBiosPS2">
              <div className="flex items-center gap-x-5">
                <img
                  src="/images/emulatorGuide/bios.png"
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
          <h1 className="text-2xl tracking-wider font-semibold">
            Minimum Hardware Requirements
          </h1>
          <div className="mt-4 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="bg-slate-100 p-5 rounded-md">
              <Monitor className="size-9" />
              <h2 className="text-lg tracking-wide font-medium mt-3">
                Minimum desktop requirements to run PS2 games
              </h2>
              <ul>
                <li>
                  CPU: Dual-core processor (Intel Core i3 / AMD equivalent)
                </li>
                <li>RAM: 4 GB</li>
                <li>GPU: DirectX 11 compatible graphics</li>
                <li>Storage: At least 10 GB free space</li>
                <li>OS: Windows 10 or later / Linux</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-5 rounded-md">
              <Smartphone className="size-9" />
              <h2 className="text-lg tracking-wide font-medium mt-3">
                Minimum android requirements to run PS2 games
              </h2>
              <ul>
                <li>OS: Android 9 or higher</li>
                <li>RAM: 4 GB</li>
                <li>CPU: Snapdragon 660 / equivalent</li>
                <li>Storage: 8-10 GB free space</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-2xl tracking-wider font-semibold">FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="downloadGameFree">
              <AccordionTrigger>
                Is it free to download PS2 games?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all downloadable files available on the platform can be
                accessed for free unless stated otherwise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="formatFile">
              <AccordionTrigger>
                What file format are the games in?
              </AccordionTrigger>
              <AccordionContent>
                Most games are provided in ISO, BIN, or compressed formats such
                as ZIP/7Z.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fileCorrupted">
              <AccordionTrigger>
                The file is corrupted what should I do?
              </AccordionTrigger>
              <AccordionContent>
                Try re-downloading the file or use a different mirror link if
                available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gameLag">
              <AccordionTrigger>
                Why does the game lag or crash?
              </AccordionTrigger>
              <AccordionContent>
                Performance issues usually occur due to low device specs or
                incorrect emulator settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="downloadSave">
              <AccordionTrigger>Are the downloads safe?</AccordionTrigger>
              <AccordionContent>
                All files are scanned, but we still recommend using antivirus
                software for extra security.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </RootLayout>
      <Outlet />
    </>
  );
}
