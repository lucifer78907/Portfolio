import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
// Sass
import "./App.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
