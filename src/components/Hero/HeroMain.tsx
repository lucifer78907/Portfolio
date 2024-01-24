import "./HeroMain.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect } from "react";

interface BreadCrumbs {
  element: any;
  isVisited: boolean;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let i: number = 0;
const HeroMain = () => {
  let allBreadCrumbs: BreadCrumbs[];
  const postionSet = new Set<number>();

  useGSAP(() => {
    allBreadCrumbs = gsap.utils.toArray(".hero__breadcrumb");
    allBreadCrumbs = allBreadCrumbs.map((crumb) => {
      return { element: crumb, isVisited: false };
    });

    gsap.set(".hero__breadcrumb", { autoAlpha: 0 }); //hiding them
  });

  const showBreadCrumbs = () => {
    if (i === allBreadCrumbs.length) return;
    // select a random element from allbreadcrumbs
    const { element: randomEle }: any = allBreadCrumbs[i];
    allBreadCrumbs[i].isVisited = true;
    i = i + 1;

    // to not have same position
    let randomX = getRandomInt(0, 100);
    while (postionSet.has(randomX)) randomX = getRandomInt(0, 100);
    postionSet.add(randomX);
    const rotateRandom = getRandomInt(0, 60);

    // animation
    gsap.set(randomEle, { left: `${randomX}%` });

    gsap.to(randomEle, {
      rotate: rotateRandom,
      autoAlpha: 1,
      bottom: 0,
      duration: 1,
      ease: "linear",
    });
  };

  return (
    <section className="hero__main">
      <h1 className="heading__primary">
        <span className="heading__primary--hindi">नमस्ते</span>I am Rudra
        <span className="heading__primary--sub" onClick={showBreadCrumbs}>
          A developer
        </span>
      </h1>
      <span className="hero__bottom-line">
        <span className="hero__breadcrumb hero__breadcrumb--react">React</span>
        <span className="hero__breadcrumb hero__breadcrumb--node">Node.js</span>
        <span className="hero__breadcrumb hero__breadcrumb--mongodb">
          MongoDb
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--design">
          Design
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--rest">
          Rest API
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--c">C++</span>
        <span className="hero__breadcrumb hero__breadcrumb--gsap">GSAP</span>
        <span className="hero__breadcrumb hero__breadcrumb--express">
          Express.js
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--next">Next.js</span>
        <span className="hero__breadcrumb hero__breadcrumb--ts">
          Typescirpt
        </span>
      </span>
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
