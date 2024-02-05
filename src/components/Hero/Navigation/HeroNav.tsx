import { useState } from "react";
import "./HeroNav.scss";
import { useGSAP } from "@gsap/react";
// Components
import Navigation from "./Navigation";
import NavCircles from "./NavCircles";
import NavigationButton from "./NavigationBtn";
// Custom Hooks
import useNavigationEffect from "../../../hooks/useNavigationEffect";

const HeroNav = () => {
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

  return (
    <>
      <header className="nav__header">
        <div className="nav__icon"></div>
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
