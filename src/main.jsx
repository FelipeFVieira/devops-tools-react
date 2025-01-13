import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

//renderizando o router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);