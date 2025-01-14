import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import HomePage from "./pages/HomePage";
import AnalysisPage from './pages/AnalysisPage';
import ComputePage from "./pages/ComputePage";
import DatabasePage from "./pages/DatabasePage";
import MachineLearningPage from "./pages/MachineLearningPage";
import MigrationPage from './pages/MigrationPage';
import NetworkPage from "./pages/NetworkPage";
import StoragePage from "./pages/StoragePage";
import SecurityPage from "./pages/SecurityPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/analysis",
        element: <AnalysisPage />,
      },
      {
        path: "/compute",
        element: <ComputePage />,
      },
      {
        path: "/database",
        element: <DatabasePage />,
      },
      {
        path: "/machinelearning",
        element: <MachineLearningPage />,
      },
      {
        path: "/migration",
        element: <MigrationPage />,
      },
      {
        path: "/network",
        element: <NetworkPage />,
      },
      {
        path: "/network",
        element: <NetworkPage />,
      },
      {
        path: "/security",
        element: <SecurityPage />,
      },
      {
        path: "/storage",
        element: <StoragePage />,
      },
    ],
  },
]);

//renderizando o router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);