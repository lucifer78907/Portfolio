import { useContext, useState } from "react";
import "./HeroNav.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// Components
import Navigation from "./Navigation";
import NavCircles from "./NavCircles";
import NavigationButton from "./NavigationBtn";
// Custom Hooks
import useNavigationEffect from "../../../hooks/useNavigationEffect";
// Context
import themeContext from "../../../context/theme-context";
import useThemeChange from "../../../hooks/useThemeChange";

const HeroNav = () => {
  const themeCtx = useContext(themeContext);
  const currTheme = themeCtx?.themeColor;
  const setThemeColor = themeCtx?.setThemeColor;
  const { contextSafe } = useGSAP();
  const [isOpen, setIsOpen] = useState<boolean>();

  let tl = useNavigationEffect();
  let themeTl = useThemeChange();

  const openMenuHandler = contextSafe(() => {
    // Opening circles
    if (!isOpen) {
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.3).reverse();
    }
    setIsOpen(!isOpen);
  });

  const handleThemeChange = contextSafe(() => {
    if (currTheme && setThemeColor) {
      setTimeout(() => {
        currTheme === "light" ? setThemeColor("dark") : setThemeColor("light");
      }, themeTl.duration() * 1000);
    }

    if (themeTl.progress() == 1) {
      themeTl.progress(0);
    }
    themeTl.play();
  });

  return (
    <>
      <header className="nav__header">
        <div className="nav__icon"></div>
        <button className="nav__btn" onClick={handleThemeChange}>
          Theme Button
          <span className="nav__btn--circle"></span>
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
