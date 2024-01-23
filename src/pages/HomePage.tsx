import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
// Components
import HeroLoader from "../components/HeroLoader";
import HeroNav from "../components/HeroNav";

const HomePage = () => {
  const sectionRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider containerRef={sectionRef} options={options}>
      <main data-scroll-container ref={sectionRef}>
        <HeroLoader />
        <HeroNav />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
