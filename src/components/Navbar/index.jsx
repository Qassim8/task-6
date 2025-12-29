import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-7">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl">RTC</h1>
        <ul className="flex gap-5">
          <li>
            <NavLink className="text-xl" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className="text-xl" to={"/drinks"}>Drinks</NavLink>
          </li>
          <li>
            <NavLink className="text-xl" to={"/food"}>Food</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
