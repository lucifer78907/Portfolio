import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Components
import HeroLoader from "../components/Hero/Loader/HeroLoader";
import HeroNav from "../components/Hero/Navigation/HeroNav";
import HeroMain from "../components/Hero/HeroMain";
import Skills from "../components/Intro/Skills/Skills";

const HomePage = () => {
  const sectionRef = useRef(null);

  const options = {
    smooth: true,
  };
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

  // Set background gradient

  useGSAP(() => {});

  return (
    <LocomotiveScrollProvider containerRef={sectionRef} options={options}>
      <div className="cursor"></div>
      <div className="circle"></div>
      <div className="smaller-circle"></div>
      <main data-scroll-container ref={sectionRef}>
        {/* <HeroLoader /> */}
        <HeroNav />
        <HeroMain />
        <Skills />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
