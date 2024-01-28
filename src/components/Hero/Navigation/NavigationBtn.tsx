const NavigationButton = ({ handleClick }: any) => {
  return (
    <aside className="header__hamburger" onClick={handleClick}>
      <div className="header__button"></div>
    </aside>
  );
};

export default NavigationButton;
