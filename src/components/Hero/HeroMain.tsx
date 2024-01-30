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

    var text = new Blotter.Text("developer", {
      family: "CarenaRegular",
      size: 150,
      fill: "#059669",
    });

    var text2 = new Blotter.Text("designer", {
      family: "CarenaRegular",
      size: 150,
      fill: "#059669",
    });

    var text3 = new Blotter.Text("dramatic", {
      family: "CarenaRegular",
      size: 150,
      fill: "#059669",
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
    setTimeout(() => {
      animateText(0);
    }, 2000);
  }, []);

  return (
    <section className="hero__main" ref={scope}>
      <h1 className="heading__primary">
        I am Rudra
        <span className="heading__primary--sub" id="main">
          A
        </span>
      </h1>
      <HeroBreadCrumbs />
      {/* <span className="hero__circle"></span> */}
    </section>
  );
};

export default HeroMain;
