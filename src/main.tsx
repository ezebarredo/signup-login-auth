import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.js";
import LoginHome from "./components/LoginHome.js";
import Login from "./components/Login.js";
import SignUp from "./components/Signup.js";
import AdminPanel from "./components/AdminPanel.js";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <Layout />,
    children: [
      {
        path: "/user",
        element: <LoginHome />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/signup",
        element: <SignUp />,
      },
      {
        path: "/user/admin",
        element: <AdminPanel />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
