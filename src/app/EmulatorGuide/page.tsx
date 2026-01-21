import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PS2EmuOverview from "@/layout/PS2EmuOverview/content";
import RootLayout from "@/layout/rootLayout/content";

export default function EmulatorGuide() {
  return (
    <RootLayout
      titlePage="Emulator Guide"
      descPage="Learn how to emulate playstation 2 games on your device, find the best emulators, setup instructions, and troubleshooting tips below"
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-wider mb-3">
          PS2 Emulator Overview
        </h1>
        <p className="text-lg">
          Below are the top recommended emulators to play PS2 game. Each
          emulator has it`s own features and strengths, download now.
        </p>
        <div className="mt-5">
          <div className="grid grid-cols-3 place-items-center gap-x-3">
            <PS2EmuOverview
              emulatorImg="/images/emulatorGuidePage/PCSX2-logo.png"
              emulatorAlt="PCSX2"
              nameEmulator="PCSX2"
              descEmulator="the most popular PS2 emulator offering the best compability
                  and a wide range of configuration options."
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
          <div className="mt-10">
            <h1 className="text-xl tracking-wider font-semibold">QNA</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="Bios PS2">
                <AccordionTrigger>
                  Where can I download PS2 Bios ?
                </AccordionTrigger>
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
                  Where can I download PS2 Bios ?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum, aliquid molestiae. Nihil quidem temporibus,
                  repudiandae est obcaecati voluptatem cupiditate.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
