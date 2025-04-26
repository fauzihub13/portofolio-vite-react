import Home from "./presentation/pages/Home";
import Project from "./presentation/pages/Project";
import Resume from "./presentation/pages/Resume";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/resume", element: <Resume /> },
  { path: "/project", element: <Project /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
