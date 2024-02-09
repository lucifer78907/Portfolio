import "./HeroMain.scss";
import gsap from "gsap";
import { useContext, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import useBlotterEffect from "../../hooks/useBlotterEffect";
import HeroDetails from "./HeroDetails";
import themeContext from "../../context/theme-context";

const HeroMain = () => {
  const themeCtx = useContext(themeContext);
  // console.log(themeCtx?.themeColor);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef<HTMLElement>(null);

  useBlotterEffect();

  return (
    <section className="hero__main" ref={scope}>
      <h1 className="heading__primary">
        I am
        <HeroDetails />
        <span className="heading__primary--sub" id="main"></span>
      </h1>
    </section>
  );
};

export default HeroMain;
