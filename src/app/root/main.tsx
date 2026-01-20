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

const rootApp = createRoot(document.getElementById("root")!);

const routePages = createBrowserRouter([
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
]);

rootApp.render(
  <StrictMode>
    <RouterProvider router={routePages} />
  </StrictMode>,
);
