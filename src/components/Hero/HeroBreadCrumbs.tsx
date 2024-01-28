import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { Flip } from "gsap/Flip";
import { breadCrumbData } from "../../data/breadCrumbData";
import BreadCrumb from "./BreadCrumb";

interface BreadCrumbs {
  element: any;
  isVisited: boolean;
}

let i: number = 0;

const HeroBreadCrumbs = () => {
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
    setTimeout(() => {
      for (let i = 0; i < allBreadCrumbs.length + 1; i++) {
        setTimeout(() => {
          showBreadCrumb();
        }, i * 1000);
      }
    }, 5000);
  });

  const showBreadCrumb = () => {
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
      gap: "2rem",
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
      onComplete: () => {
        const breadItemClass = `.hero__breadcrumb--icon`;
        gsap.to(breadItemClass, {
          top: "-60%",
          autoAlpha: 1,
          stagger: {
            amount: 1,
            from: "center",
          },
        });
      },
    });
  };

  return (
    <span className="hero__bottom-line">
      {breadCrumbData.map((breadCrumb) => {
        return (
          <BreadCrumb
            key={breadCrumb.id}
            title={breadCrumb.breadCrumbTitle}
            breadCrumbClassName={breadCrumb.breadCrumbClassName}
            icon={breadCrumb.breadCrumbIcon}
            iconColor={breadCrumb.iconColor}
          />
        );
      })}
    </span>
  );
};

export default HeroBreadCrumbs;
