import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
// Components
import HeroLoader from "../components/Hero/Loader/HeroLoader";
import HeroMain from "../components/Hero/HeroMain";
import Skills from "../components/Intro/Skills/Skills";

const HomePage = () => {
  const sectionRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider containerRef={sectionRef} options={options}>
      <main data-scroll-container ref={sectionRef}>
        {/* <HeroLoader /> */}
        <HeroMain />
        <Skills />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
