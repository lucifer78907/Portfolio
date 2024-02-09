// Components
import HeroMain from "../components/Hero/HeroMain";
import Skills from "../components/Intro/Skills/Skills";
import useLocoScroll from "../hooks/useLocoScroll";

const HomePage = () => {
  useLocoScroll();
  return (
    <>
      <div data-scroll-container>
        <HeroMain />
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
