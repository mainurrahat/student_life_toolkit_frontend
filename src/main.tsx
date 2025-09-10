import React from "react";
import ReactDOM from "react-dom/client"; // ✅ make sure ReactDOM imported
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "../src/App.css";
import { router } from "./Routes/Routes";
import { AuthProvider } from "./components/context/AuthContext";

// Create root for React 18+
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
