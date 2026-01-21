import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import GuidesEmulator from "@/layout/guidesEmu/content";
import PS2EmuOverview from "@/layout/PS2EmuOverview/content";
import { Gamepad2, Monitor, Wrench } from "lucide-react";

export default function EmulatorGuide() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold tracking-wide mb-3">
          PS2 Emulator Overview
        </h1>
        <p className="text-lg">
          Below are the top recommended emulators to play PS2 game. Each
          emulator has it`s own features and strengths, download here.
        </p>
        <div className="grid grid-cols-3 place-items-center gap-3 mt-5">
          <PS2EmuOverview
            emulatorImg="/images/emulatorGuidePage/PCSX2-logo.png"
            emulatorAlt="PCSX2"
            nameEmulator="PCSX2"
            descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            href="/setupPCSX2"
          >
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
          </PS2EmuOverview>
          <PS2EmuOverview
            emulatorImg="/images/emulatorGuidePage/aetherSX2-logo.png"
            emulatorAlt="AetherSX2"
            nameEmulator="AetherSX2"
            descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            href="/setupPCSX2"
          >
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
          </PS2EmuOverview>
          <PS2EmuOverview
            emulatorImg="/images/emulatorGuidePage/damonPS2-logo.png"
            emulatorAlt="DamonPS2"
            nameEmulator="DamonPS2"
            descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
            href="/setupPCSX2"
          >
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
          </PS2EmuOverview>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-2xl tracking-wider font-semibold">Guides</h1>
        <div className="grid grid-cols-4 place-items-center gap-3 mt-5">
          <GuidesEmulator>
            <div className="flex items-center gap-x-5">
              <Monitor className="size-10" />
              <h2 className="text-lg font-semibold tracking-wide">
                Setup the Emulator
              </h2>
            </div>
            <p>Learn how to emulate PS2 game on your PC</p>
          </GuidesEmulator>
          <GuidesEmulator>
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
            <p>Learn how to emulate PS2 game on your PC</p>
          </GuidesEmulator>
          <GuidesEmulator>
            <div className="flex items-center gap-x-5">
              <Gamepad2 className="size-10" />
              <h2 className="text-lg font-semibold tracking-wide">
                Controller configuration
              </h2>
            </div>
            <p>Learn how to emulate PS2 game on your PC.</p>
          </GuidesEmulator>
          <GuidesEmulator>
            <div className="flex items-center gap-x-5">
              <Wrench className="size-10" />
              <h2 className="text-lg font-semibold tracking-wide">
                Troubleshooting tips
              </h2>
            </div>
            <p>Learn how to emulate PS2 game on your PC</p>
          </GuidesEmulator>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-2xl tracking-wider font-semibold">FAQ</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="Bios PS2">
            <AccordionTrigger>Where can I download PS2 Bios ?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, aliquid molestiae. Nihil quidem temporibus,
              repudiandae est obcaecati voluptatem cupiditate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tips using PS2">
            <AccordionTrigger>Tips for using PS2 Emulator</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, aliquid molestiae. Nihil quidem
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ASD">
            <AccordionTrigger>
              How to install PS2 game on PCSX2
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, aliquid molestiae. Nihil quidem temporibus,
              repudiandae est obcaecati voluptatem cupiditate.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
