import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

function mainPage() {
  return <App />;
}

function teste() {
  return "Deivid Viado";
}

function teste2() {
  return "Página da Web."
}

const router = createBrowserRouter([
  { path: "/", Component: mainPage },
  { path: "/rota2", Component: teste },
  {path: "/araucaria", Component: teste2}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
