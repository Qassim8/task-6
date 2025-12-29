import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Home from "../../pages/Home";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
