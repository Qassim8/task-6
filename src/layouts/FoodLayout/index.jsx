import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import SideBar from "../../components/SideBar";

const FoodLayout = () => {
  const links = [
    { title: "Pizza", path: "/food" },
    { title: "Burger", path: "burger" },
    { title: "Salad", path: "salad" },
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

export default FoodLayout;
