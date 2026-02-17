import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../HomePage/page";
import AllGames from "../AllGames/page";
import EmulatorGuide from "../EmulatorGuide/page";
import Contact from "../Contact/page";
import GameDetail from "../GameDetail/page";
import GuideEmulator from "../EmulatorGuide/Guide/page";
import InstallEmulator from "../EmulatorGuide/InstallEmulator/page";

const rootApp = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/HomePage"),
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/AllGames",
    element: <AllGames />,
  },
  {
    path: "/EmulatorGuide",
    children: [
      {
        index: true,
        element: <EmulatorGuide />,
      },
      {
        path: "InstallEmulator/:installEmu",
        element: <InstallEmulator />,
      },
      {
        path: "Guide/:allGuidesEmu",
        element: <GuideEmulator />,
      },
    ],
  },
  {
    path: "/:pagePath/GameDetail/:detailGame",
    element: <GameDetail />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

rootApp.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
