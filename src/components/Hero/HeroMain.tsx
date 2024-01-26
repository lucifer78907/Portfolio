import "./HeroMain.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { Flip } from "gsap/Flip";

interface BreadCrumbs {
  element: any;
  isVisited: boolean;
}

let i: number = 0;
const HeroMain = () => {
  gsap.registerPlugin(Flip);
  let allBreadCrumbs: BreadCrumbs[];
  const postionSet = new Set<number>();

  useGSAP(() => {
    allBreadCrumbs = gsap.utils.toArray(".hero__breadcrumb");
    allBreadCrumbs = allBreadCrumbs.map((crumb) => {
      return { element: crumb, isVisited: false };
    });

    gsap.set(".hero__breadcrumb", { autoAlpha: 0 }); //hiding them
  });

  useEffect(() => {
    for (let i = 0; i < allBreadCrumbs.length + 1; i++) {
      setTimeout(() => {
        showBreadCrumbs();
      }, i * 300);
    }
  });

  const showBreadCrumbs = () => {
    if (i > allBreadCrumbs.length) return;
    if (i === allBreadCrumbs.length) {
      alignBreadCrumbs();
      i = i + 1;
      return;
    }
    // select a random element from allbreadcrumbs
    const { element: randomEle }: any = allBreadCrumbs[i];
    allBreadCrumbs[i].isVisited = true;
    i = i + 1;

    // to not have same position
    // let randomX = getRandomInt(0, 100);
    let randomX: number = gsap.utils.random(10, 80, 7);
    while (postionSet.has(randomX)) randomX = gsap.utils.random(10, 80, 7);
    postionSet.add(randomX);

    // animation
    gsap.set(randomEle, { left: `${randomX}%` });

    gsap.to(randomEle, {
      autoAlpha: 1,
      bottom: 0,
      duration: 1,
      ease: "bounce",
    });
  };

  const alignBreadCrumbs = () => {
    const state = Flip.getState(".hero__breadcrumb");

    gsap.set(".hero__bottom-line", {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: "1rem",
    });

    gsap.set(".hero__breadcrumb", {
      left: "50%",
      transform: "translateX(-50%)",
    });

    Flip.from(state, {
      duration: 2,
      ease: "power4.in",
      onComplete: speardBreadCrumbs,
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  };

  const speardBreadCrumbs = () => {
    const state = Flip.getState(".hero__breadcrumb");

    gsap.set(".hero__breadcrumb", {
      left: 0,
      position: "relative",
      transform: "translateX(0)",
    });

    Flip.from(state, {
      delay: 1,
      duration: 1,
      ease: "power4.out",
    });
  };

  return (
    <section className="hero__main">
      <h1 className="heading__primary">
        <span className="heading__primary--hindi">नमस्ते</span>I am Rudra
        <span className="heading__primary--sub">A developer</span>
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
        <span className="hero__breadcrumb hero__breadcrumb--rest">REST</span>
        <span className="hero__breadcrumb hero__breadcrumb--c">C++</span>
        <span className="hero__breadcrumb hero__breadcrumb--gsap">GSAP</span>
        <span className="hero__breadcrumb hero__breadcrumb--express">
          Express.js
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--next">Next.js</span>
        <span className="hero__breadcrumb hero__breadcrumb--ts">
          Typescirpt
        </span>
        <span className="hero__breadcrumb hero__breadcrumb--lnx">Linux</span>
      </span>
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
