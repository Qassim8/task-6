import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import SideBar from "../../components/SideBar";

const FoodLayout = () => {
  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="grow pl-2.5">
        <Outlet />
      </div>
    </div>
  );
};

export default FoodLayout;
