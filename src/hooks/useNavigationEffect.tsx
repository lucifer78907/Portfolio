import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useState } from "react";
import { Flip } from "gsap/all";

const colors = ["#bfdbfe", "#60a5fa", "#2563eb"];

let allHeaderCircles: HTMLSpanElement[];
let linkSpanParas: (HTMLSpanElement | HTMLParagraphElement)[];
let spans: any = [];

const useNavigationEffect = (): GSAPTimeline => {
  gsap.registerPlugin(CSSRulePlugin);
  gsap.registerPlugin(Flip);

  const [tl, setTimeLine] = useState<GSAPTimeline>(
    gsap.timeline({ paused: true })
  );

  const moveDownButton = () => {
    const state = Flip.getState(".header__hamburger");

    gsap.set(".header__hamburger", { top: "80%" });

    const ani = Flip.from(state, {
      duration: 2,
      ease: "power2.out",
    });

    tl.add(ani);
  };

  useLayoutEffect(() => {
    // Animation for A

    const container2 = document.querySelector(".nav__icon");

    var atext = new Blotter.Text("R", {
      family: "CarenaRegular",
      size: 100,
      fill: "#2563EB",
    });

    var material2 = new Blotter.FliesMaterial();
    material2.uniforms.uPointCellWidth.value = 0.018;
    material2.uniforms.uPointRadius.value = 0.8;

    var blotter2 = new Blotter(material2, {
      texts: atext,
    });

    var scope2 = blotter2.forText(atext);
    scope2.appendTo(container2);

    // Track mouse movement
    // Track mouse movement
  }, []);

  useLayoutEffect(() => {
    gsap.set(".header", { autoAlpha: 0 });

    linkSpanParas = [
      ...gsap.utils.toArray<HTMLSpanElement>(".nav__list--item span"),
      ...gsap.utils.toArray<HTMLParagraphElement>(".nav__para span"),
    ];
    // Setting circle colors
    allHeaderCircles = gsap.utils.toArray(".header__circle");
    gsap.set(allHeaderCircles, { scale: 0 });
    let i = 0;
    for (const item of allHeaderCircles) {
      const color = colors[i++];
      const bgImg = `radial-gradient(${color},${color})`;
      gsap.set(item as HTMLSpanElement, {
        backgroundImage: bgImg,
      });
    }
    spans = [
      CSSRulePlugin.getRule(".header__button::before"),
      CSSRulePlugin.getRule(".header__button::after"),
    ];
  }, []);

  useGSAP(() => {
    // Circles
    tl.to(
      allHeaderCircles,
      {
        scale: 100,
        duration: 0.5,
        ease: "power1.in",
        stagger: {
          amount: 0.5,
        },
      },
      "-=0.2"
    );

    // Hamburger Icon
    tl.to(".header__button", { rotate: "45deg" }, "<");
    tl.to(".header__hamburger", {
      backgroundColor: "var(--color-accent-600)",
    });
    tl.to(spans[0], { rotate: "-90deg", transformOrigin: "left" }, "<");
    tl.to(
      spans[1],
      {
        rotate: "-90deg",
        transformOrigin: "right",
        onComplete: moveDownButton,
      },
      "<"
    );

    // Menu Visibility
    tl.to(".header", { autoAlpha: 1 }, "<");

    // Links
    tl.to(linkSpanParas, {
      yPercent: 100,
      ease: "power1.in",
      duration: 2,
    });

    tl.progress(0);
    setTimeLine(tl);
  });

  return tl;
};

export default useNavigationEffect;
