import "./HeroNav.scss";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useLayoutEffect, useRef } from "react";

const HeroNav = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(CSSRulePlugin);
  let path: any;
  let spanBefore: any;

  useLayoutEffect(() => {
    spanBefore = CSSRulePlugin.getRule(".hamburger span:before");
    gsap.set(spanBefore, { background: "#000" });
    gsap.set(menuRef.current, { visibility: "hidden" });
    path = document.querySelector("path");
  }, []);

  const onClickHandler = () => {
    const tl = gsap.timeline();

    // function revealMenu() {
    //   revealMenuItems();

    //   // const hamburger = document.querySelector(".hamburger");

    //   // hamburger?.classList.toggle("active");
    //   // tl.reversed(!tl.reversed());
    // }

    const start = "M0 5025175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0z";

    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.to(".hamburger", {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    // Menu
    tl.to(
      ".hamburger span",
      {
        backgroundColor: "#e2e2dc",
        ease: power2,
      },
      "<"
    );

    tl.to(
      spanBefore,
      {
        backgroundColor: "#e2e2dc",
        ease: power2,
      },
      "<"
    );

    //Toggle btn
    tl.to(
      ".btn .btn-outline",
      {
        x: -40,
        y: 40,
        width: "14rem",
        height: "14rem",
        border: "1px solid #e2e2dc",
        ease: power4,
      },
      "<"
    );

    // Path
    tl.to(
      path,
      {
        attr: {
          d: start,
        },
        ease: power2,
      },
      "<"
    ).to(
      path,
      {
        attr: {
          d: end,
        },
        ease: power2,
      },
      "-0.5"
    );

    //Menu
    tl.to(".menu", { visibility: "visible" }, "-=0.5");

    // Menu items
    tl.to(
      ".menu-item > a",
      {
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      },
      "-=1"
    );
  };

  return (
    <>
      <div className="btn" id="toggle-btn" onClick={onClickHandler}>
        <div className="btn-outline btn-outline-1"></div>
        <div className="btn-outline btn-outline-2"></div>
        <div className="hamburger">
          <span></span>
        </div>
      </div>
      <div className="overlay">
        <svg viewBox="0 0 1000 1000">
          <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>
      <div className="menu" ref={menuRef}>
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">
                  <span>I</span>Index
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>II</span>Work
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>III</span>About
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Lets</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">Work</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">Together</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroNav;
