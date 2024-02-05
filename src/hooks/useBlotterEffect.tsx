import { useLayoutEffect } from "react";

const useBlotterEffect = () => {
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
  }, []);
};

export default useBlotterEffect;
