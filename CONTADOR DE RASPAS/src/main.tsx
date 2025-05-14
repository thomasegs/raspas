import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home.tsx";
import Login from "./pages/Login.tsx";

function mainPage() {
  return <App />;
}

function home() {
  return <Home />;
}

function login() {
  return <Login />;
}

const router = createBrowserRouter([
  { path: "/", Component: mainPage },
  { path: "/home", Component: home },
  { path: "/login", Component: login },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
