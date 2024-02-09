import { MouseEventHandler, useContext, useState } from "react";
import "./HeroNav.scss";
import { useGSAP } from "@gsap/react";
// Components
import Navigation from "./Navigation";
import NavCircles from "./NavCircles";
import NavigationButton from "./NavigationBtn";
// Custom Hooks
import useNavigationEffect from "../../../hooks/useNavigationEffect";
// Context
import themeContext from "../../../context/theme-context";

const HeroNav = () => {
  const themeCtx = useContext(themeContext);
  const { contextSafe } = useGSAP();
  const [isOpen, setIsOpen] = useState<boolean>();

  let tl = useNavigationEffect();

  const openMenuHandler = contextSafe(() => {
    // Opening circles
    if (!isOpen) {
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.3).reverse();
    }
    setIsOpen(!isOpen);
  });

  const handleThemeChange = () => {
    console.log("Theme is", themeCtx?.themeColor);
    const currTheme = themeCtx?.themeColor;
    const setThemeColor = themeCtx?.setThemeColor;
    if (currTheme && setThemeColor)
      currTheme === "light" ? setThemeColor("dark") : setThemeColor("light");
  };

  return (
    <>
      <header className="nav__header">
        <div className="nav__icon"></div>
        <button className="nav__btn" onClick={handleThemeChange}>
          Theme Button
        </button>
        <aside>
          <NavCircles />
          <NavigationButton handleClick={openMenuHandler} />
          <Navigation />
        </aside>
      </header>
    </>
  );
};

export default HeroNav;
