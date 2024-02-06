import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useEffect } from "react";
import gsap from "gsap";
// Pages
import HomePage from "./pages/HomePage";
// Sass
import "./App.scss";
import RootLayout from "./pages/RootLayout";
// Components
import Cursor from "./components/Cursor/Cursor";
// Provider
import themeContext from "./context/theme-context";
// Types
import { themeContextType } from "./context/theme-context";

const App = () => {
  const ctx = useContext<themeContextType | null>(themeContext);
  // to remove legacy cursor
  useEffect(() => {
    // document.documentElement.style.cursor = "none";
  }, []);

  // to add custom cursor
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;
    const circle = document.querySelector(".circle") as HTMLDivElement;
    const circle2 = document.querySelector(".smaller-circle") as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      gsap.to(circle, { x: mouseX, y: mouseY });
      gsap.to(circle2, { x: mouseX + 10, y: mouseY + 10, delay: 0.1 });
      gsap.to(cursor, { x: mouseX + 25, y: mouseY + 25, delay: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);
  }, []);

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

  useEffect(() => {
    if (ctx?.themeColor === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [ctx?.themeColor]);

  return (
    <>
      <Cursor />
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
};

export default App;
