import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
// Components
import HeroLoader from "../components/Hero/HeroLoader";
import HeroNav from "../components/Hero/HeroNav";
import HeroMain from "../components/Hero/HeroMain";

const HomePage = () => {
  const sectionRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider containerRef={sectionRef} options={options}>
      <main data-scroll-container ref={sectionRef}>
        {/* <HeroLoader /> */}
        {/* <HeroNav /> */}
        <HeroMain />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
