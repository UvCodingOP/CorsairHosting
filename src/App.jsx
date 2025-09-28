import React, { Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/Loader";
import { ThemeContext } from "./context/ThemeContext";
import Login from "./components/login/Login";

const Home = React.lazy(() => import("./pages/home/Home"));
const Register = React.lazy(() => import("./pages/register/Register"))

const App = () => {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Suspense
            fallback={
              <Loader theme={theme ? "#111827" : "#fff"} color={theme} />
            }
          >
            <Home />
          </Suspense>
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
        <Navbar />
          <Suspense
            fallback={
              <Loader theme={theme ? "#111827" : "#fff"} color={theme} />
            }
          >
            <Register />
          </Suspense>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
        <Navbar />
          <Suspense
            fallback={
              <Loader theme={theme ? "#111827" : "#fff"} color={theme} />
            }
          >
            <Login />
          </Suspense>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
