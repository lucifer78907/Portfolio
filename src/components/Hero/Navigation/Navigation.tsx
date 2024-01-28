const Navigation = () => {
  return (
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
  );
};

export default Navigation;
