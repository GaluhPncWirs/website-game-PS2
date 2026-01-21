import type React from "react";
import NavigationBar from "../../components/navbar/content";
import { Button } from "../../components/ui/button";
import { useLocation } from "react-router-dom";
import Footer from "@/components/footer/content";

type propsRootLayout = {
  titlePage: string;
  descPage: string;
  children: React.ReactNode;
};

export default function RootLayout(props: propsRootLayout) {
  const { titlePage, descPage, children } = props;
  const { pathname } = useLocation();
  return (
    <main>
      <NavigationBar />
      <div className="heroSection h-100 flex flex-col justify-center px-16 gap-y-4">
        <h1 className="font-bold text-4xl tracking-wider text-shadow-lg text-shadow-slate-300 max-w-2xl">
          {titlePage}
        </h1>
        <h3 className="font-semibold text-xl tracking-wide text-shadow-lg text-shadow-slate-300 max-w-2xl">
          {descPage}
        </h3>
        {pathname === "/HomePage" && (
          <div className="flex gap-x-5">
            <Button>Browse Games</Button>
            <Button variant="outline">Emulator Support</Button>
          </div>
        )}
      </div>
      <div className="w-4/5 mx-auto my-10">{children}</div>
      <Footer />
    </main>
  );
}
