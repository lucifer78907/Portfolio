import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
// Components
import HeroLoader from "../components/HeroLoader";

const HomePage = () => {
  const sectionRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider ref={sectionRef} options={options}>
      <main data-scroll-container ref={sectionRef}>
        <HeroLoader />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
