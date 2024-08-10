import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.tsx";
import { Navbar } from "./component/Navbar.tsx";
import { Login } from "./component/Login.tsx";
import { SignUp } from "./component/Signup.tsx";
import Footer from "./component/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Navbar />
            <Login />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <Navbar />
            <SignUp />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
