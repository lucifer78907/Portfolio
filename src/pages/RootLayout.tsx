import { Outlet } from "react-router-dom";
import HeroNav from "../components/Hero/Navigation/HeroNav";

const RootLayout = () => {
  return (
    <>
      <HeroNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
