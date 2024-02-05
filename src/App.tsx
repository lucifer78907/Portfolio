import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
// Sass
import "./App.scss";
import RootLayout from "./pages/RootLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
