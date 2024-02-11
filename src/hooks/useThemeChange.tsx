import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const useThemeChange = () => {
  const [tl, setTimeline] = useState<GSAPTimeline>(
    gsap.timeline({ paused: true })
  );

  useGSAP(() => {
    const color = gsap.getProperty(".nav__btn--circle", "backgroundColor");
    const light = "rgb(226, 232, 240)";
    const dark = "rgb(23, 23, 23)";
    console.log(color, color === light);
    tl.set(".hero__main", { opacity: 0 });
    tl.set(".nav__btn--circle", {
      backgroundColor: `${color === light ? dark : light}`,
    });
    tl.to(".nav__btn--circle", {
      scale: 150,
      ease: "power2.out",
      duration: 1.5,
    });
    tl.to(
      ".nav__btn--circle",
      {
        opacity: 0,
      },
      "+=0.1"
    );
    tl.to(
      ".hero__main",
      {
        opacity: 1,
      },
      "+=0.2"
    );
    setTimeline(tl);
  }, null);

  return tl;
};

export default useThemeChange;
