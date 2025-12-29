import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";

const DrinksLayout = () => {
  const links = [
    { title: "Juices", path: "/drinks" },
    { title: "Hot Drinks", path: "hots" },
    { title: "Sodas", path: "sodas" },
  ];
  return (
    <div className="min-h-screen flex">
      <SideBar links={links} />
      <div className="grow pl-2.5">
        <Outlet />
      </div>
    </div>
  );
};

export default DrinksLayout;
