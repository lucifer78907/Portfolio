import "./HeroLoader.scss";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
// Components
import LoadingBars from "./LoadingBars";

const HeroLoader = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const startLoader = () => {
      let currValue: number = 0;

      const updateCounter = () => {
        if (currValue == 100) {
          return;
        }

        currValue += Math.floor(Math.random() * 10) + 1;

        if (currValue > 100) {
          currValue = 100;
        }

        if (counterRef.current !== null) {
          counterRef.current.textContent = currValue.toString();
        }

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      };
      updateCounter();
    };

    startLoader();
    gsap.to(".hero__counter", { duration: 0.25, delay: 3.5, opacity: 0 });
    gsap.to(".hero__bar", {
      duration: 1.5,
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  }, []);

  return (
    <section className="hero__overlay">
      <p className="hero__counter" ref={counterRef}>
        0
      </p>
      <LoadingBars />
    </section>
  );
};

export default HeroLoader;
