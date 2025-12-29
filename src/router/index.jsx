import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Pizza from "../pages/Pizza";
import Burger from "../pages/Burger";
import Salad from "../pages/Salad";
import MainLayout from "../layouts/MainLayout";
import FoodLayout from "../layouts/FoodLayout";
import DrinksLayout from "../layouts/DrinksLayout";
import Juice from "../pages/Juice";
import HotDrinks from "../pages/HotDrinks";
import Soda from "../pages/Soda";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="drinks" element={<DrinksLayout />}>
              <Route index element={<Juice />} />
              <Route path="hots" element={<HotDrinks />} />
              <Route path="sodas" element={<Soda />} />
            </Route>

            <Route path="food" element={<FoodLayout />}>
              <Route index element={<Pizza />} />
              <Route path="burger" element={<Burger />} />
              <Route path="salad" element={<Salad />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 | Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
