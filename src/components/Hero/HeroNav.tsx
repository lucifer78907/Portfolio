import "./HeroNav.scss";

const HeroNav = () => {
  return (
    <>
      <aside className="header__hamburger">
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
