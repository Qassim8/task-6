import React from "react";
import { NavLink } from "react-router";

const SideBar = ({ links }) => {
  return (
    <ul className="side bg-gray-900 flex flex-col gap-1.5 px-3 pt-4 text-white">
      {links.map(({ title, path }, index) => (
        <li key={index}>
          <NavLink
            className="text-center block py-2 font-bold px-10 bg-gray-800 rounded-lg"
            to={path}
            end
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
