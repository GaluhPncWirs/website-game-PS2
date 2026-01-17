import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage/page";

const rootApp = createRoot(document.getElementById("root")!);

const routePages = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

rootApp.render(
  <StrictMode>
    <RouterProvider router={routePages} />
  </StrictMode>,
);
