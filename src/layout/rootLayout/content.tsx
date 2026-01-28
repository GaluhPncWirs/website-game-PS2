import type React from "react";
import NavigationBar from "../../components/navbar/content";
import { Link, useLocation } from "react-router-dom";
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
    <>
      <NavigationBar />
      <div className="heroSection h-100 flex flex-col justify-center px-6 gap-y-4 md:px-10 lg:px-16">
        <h1 className="font-bold tracking-wider text-shadow-sm text-shadow-blue-100 text-3xl max-w-sm md:text-4xl md:max-w-md lg:max-w-2xl">
          {titlePage}
        </h1>
        <h3 className="font-semibold text-xl tracking-wide text-shadow-sm text-shadow-blue-100 md:max-w-xl">
          {descPage}
        </h3>
        {pathname === "/HomePage" && (
          <div className="flex gap-x-5 font-semibold tracking-wide">
            <Link
              to="/AllGames"
              className="bg-blue-500 text-slate-100 px-5 py-1.5 rounded-md"
            >
              Browse Games
            </Link>
            <Link
              to="/EmulatorGuide"
              className="bg-blue-100 px-5 py-1.5 rounded-md"
            >
              Emulator Support
            </Link>
          </div>
        )}
      </div>
      <div className="w-11/12 mx-auto my-10">{children}</div>
      <Footer />
    </>
  );
}
