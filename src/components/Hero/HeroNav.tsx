import { useLayoutEffect } from "react";
import "./HeroNav.scss";
import gsap from "gsap";

const colors = ["#047857", "#10b981", "#6ee7b7"];
let isOpen: boolean = false;
const tl = gsap.timeline();
let allHeaderCircles: HTMLSpanElement[];
let linkSpanParas: HTMLSpanElement | HTMLParagraphElement[];

const HeroNav = () => {
  useLayoutEffect(() => {
    gsap.set(".header", { autoAlpha: 0 });

    linkSpanParas = gsap.utils.toArray(".nav__list--item span");
    let navPara: HTMLParagraphElement[] = gsap.utils.toArray(".nav__para span");
    linkSpanParas = [...linkSpanParas, ...navPara];
    // Setting circle colors
    allHeaderCircles = gsap.utils.toArray(".header__circle");
    let i = 0;
    for (const item of allHeaderCircles) {
      const color = colors[i++];
      const bgImg = `radial-gradient(${color},${color})`;
      gsap.set(item as HTMLSpanElement, {
        backgroundImage: bgImg,
      });
    }
  }, []);

  const openMenuHandler = () => {
    // Opening circles
    if (!isOpen) {
      isOpen = true;
      tl.play();
      for (const item of allHeaderCircles) {
        tl.to(
          item as HTMLSpanElement,
          {
            scale: 100,
            duration: 0.5,
            ease: "power1.in",
          },
          "-=0.2"
        );
      }
      tl.to(".header", { autoAlpha: 1 });
      tl.to(linkSpanParas, {
        transform: "translateY(100%)",
        ease: "linear",
        duration: 1,
      });
    } else {
      isOpen = false;
      tl.reverse();
    }

    // tl.reversed(!tl.reversed());
  };

  return (
    <>
      <div className="header__circle--container">
        <span className="header__circle"></span>
        <span className="header__circle"></span>
        <span className="header__circle"></span>
      </div>
      <aside className="header__hamburger" onClick={openMenuHandler}>
        <div className="header__button"></div>
      </aside>
      <header className="header">
        <nav className="nav">
          <article className="nav__primary--menu">
            <ul className="nav__list">
              <li className="nav__list--item">
                I
                <a href="#" className="nav__list--link">
                  Home
                </a>
                <span></span>
              </li>
              <li className="nav__list--item">
                II
                <a href="#" className="nav__list--link">
                  About
                </a>
                <span></span>
              </li>
              <li className="nav__list--item">
                III
                <a href="#" className="nav__list--link">
                  Projects
                </a>
                <span></span>
              </li>
            </ul>
          </article>
          <article className="nav__secondary--menu">
            <p className="nav__para">
              Let us <span></span>
            </p>
            <p className="nav__para">
              Work <span></span>
            </p>
            <p className="nav__para">
              Together <span></span>
            </p>
          </article>
        </nav>
      </header>
    </>
  );
};

export default HeroNav;
