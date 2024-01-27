import { useLayoutEffect } from "react";
import "./HeroNav.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const colors = ["#047857", "#10b981", "#6ee7b7"];

const tl = gsap.timeline();
const HeroNav = () => {
  let allHeaderCircles: HTMLSpanElement[];

  useLayoutEffect(() => {
    gsap.set(".header", { autoAlpha: 0 });

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
    tl.reversed(!tl.reversed());
  };

  useGSAP(() => {});

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
              </li>
              <li className="nav__list--item">
                II
                <a href="#" className="nav__list--link">
                  About
                </a>
              </li>
              <li className="nav__list--item">
                III
                <a href="#" className="nav__list--link">
                  Projects
                </a>
              </li>
            </ul>
          </article>
          <article className="nav__secondary--menu">
            <p className="nav__para">Let us</p>
            <p className="nav__para">Work</p>
            <p className="nav__para">Together</p>
          </article>
        </nav>
      </header>
    </>
  );
};

export default HeroNav;
