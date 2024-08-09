import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MonPicsProvider, EditorProvider } from "./contexts";
import { Layout } from "./components";
import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <MonPicsProvider>
      <EditorProvider>
        <RouterProvider router={router} />
      </EditorProvider>
    </MonPicsProvider>
  </React.StrictMode>,
);
