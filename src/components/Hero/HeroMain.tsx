import "./HeroMain.scss";
import HeroBreadCrumbs from "./HeroBreadCrumbs";

const HeroMain = () => {
  return (
    <section className="hero__main">
      <h1 className="heading__primary">
        <span className="heading__primary--hindi">नमस्ते</span>I am Rudra
        <span className="heading__primary--sub">A developer</span>
      </h1>
      <HeroBreadCrumbs />
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
