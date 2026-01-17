import type React from "react";
import NavigationBar from "../../components/navbar/content";
import { Button } from "../../components/ui/button";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <div className="heroSection h-110 flex flex-col justify-center px-16 gap-y-4">
        <h1 className="font-bold text-4xl tracking-wider">
          Download Games PS2 Here !!!
        </h1>
        <h3 className="font-semibold text-xl tracking-wide">
          Classic PlayStation 2 Games, Ready to Play on Your PC
        </h3>
        <div className="flex gap-x-5">
          <Button>Browse Games</Button>
          <Button variant="outline">Emulator Support</Button>
        </div>
      </div>
      <div className="w-4/5 mx-auto">{children}</div>
      {/* <Footer/> */}
    </div>
  );
}
