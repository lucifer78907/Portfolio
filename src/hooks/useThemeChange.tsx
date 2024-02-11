import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const useThemeChange = () => {
  const [tl, setTimeline] = useState<GSAPTimeline>(
    gsap.timeline({ paused: true })
  );

  useGSAP(() => {
    tl.set(".hero__main", { opacity: 0 });
    tl.to(".nav__btn", {
      top: "50%",
      transform: "translate(-50%,-50%)",
      scale: 5,
      rotate: 360,
    });
    tl.to(
      ".nav__btn--circle",
      {
        scale: 150,
        ease: "power2.out",
        duration: 1.5,
        backgroundColor: "#2563eb",
        onComplete: () => {
          gsap.set(".nav__btn", {
            top: "5%",
            transform: "none",
            scale: 1,
            rotate: 0,
          });
        },
      },
      "<"
    );
    tl.to(
      ".nav__btn--circle",
      {
        autoAlpha: 0,
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
  });

  return tl;
};

export default useThemeChange;
