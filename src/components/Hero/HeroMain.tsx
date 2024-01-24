import "./HeroMain.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroMain = () => {
  return (
    <section className="hero__main">
      <h1 className="heading__primary">
        <span className="heading__primary--hindi">नमस्ते</span>I am Rudra
        <span className="heading__primary--sub">A developer</span>
      </h1>
      <span className="hero__bottom-line">
        <span className="hero__breadcrumb hero__breadcrumb--react">React</span>
        {/* <span className="hero__breadcrumb hero__breadcrumb--node">Node.js</span>
        <span className="hero__breadcrumb hero__breadcrumb--mongodb">
          MongoDb
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--design">
          Design
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--rest">
          Rest API
        </span> */}
      </span>
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
