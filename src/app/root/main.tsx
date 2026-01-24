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
import SetupEmulator from "../EmulatorGuide/SetupEmulator/page";
import Contact from "../Contact/page";

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
        path: "SetupEmulator",
        element: <SetupEmulator />,
      },
    ],
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
