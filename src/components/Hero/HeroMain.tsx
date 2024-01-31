import "./HeroMain.scss";
import HeroBreadCrumbs from "./BreadCrumb/HeroBreadCrumbs";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const HeroMain = () => {
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let container = document.getElementById("main");

    var text = new Blotter.Text("Rudra", {
      family: "CarenaRegular",
      size: 150,
      fill: "#2563EB",
    });

    var text2 = new Blotter.Text("a designer", {
      family: "CarenaRegular",
      size: 150,
      fill: "#2563EB",
    });

    var text3 = new Blotter.Text("a developer", {
      family: "CarenaRegular",
      size: 150,
      fill: "#2563EB",
    });

    var material = new Blotter.SlidingDoorMaterial();
    material.uniforms.uDivisions.value = 11;
    material.uniforms.uDivisionWidth.value = 0.25;
    material.uniforms.uSpeed.value = 0.15;

    var blotter = new Blotter(material, {
      needsUpdate: true,
      texts: [text, text2, text3],
    });

    var scope;
    let size = blotter.texts.length;

    function animateText(index) {
      scope = blotter.forText(blotter.texts[index % size]);
      scope.appendTo(container);

      setTimeout(function () {
        console.log("Hello from index", index);
        // Remove the current text from the DOM
        container?.removeChild(container.lastChild);

        // Move to the next text (if available)
        animateText(index + 1);
      }, 7000);
    }

    // Start the animation with the first text
    animateText(0);

    // Animation for A

    const container2 = document.querySelector(".hero__background");

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

  return (
    <section className="hero__main" ref={scope}>
      <h1 className="heading__primary">
        I am
        <span className="heading__primary--sub" id="main"></span>
      </h1>
      <div className="hero__background"></div>
      {/* <HeroBreadCrumbs /> */}
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
