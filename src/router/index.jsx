import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/Home";
import Drinks from "../pages/Drinks";
import Food from "../pages/Food";
import Login from "../pages/Login";
import Pizza from "../pages/Pizza";
import Burger from "../pages/Burger";
import Salad from "../pages/Salad";
import MainLayout from "../layouts/MainLayout";
import FoodLayout from "../layouts/FoodLayout";
import { useState } from "react";

const Router = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="drinks" element={<Drinks />} />

            <Route path="food" element={<FoodLayout />}>
              <Route index element={<Pizza />} />
              <Route path="burger" element={<Burger />} />
              <Route path="salad" element={<Salad />} />
            </Route>
            
          </Route>

          {/* <Route path="/food" element={<FoodLayout />}>
            <Route index element={<Pizza />} />
            <Route path="burger" element={<Burger />} />
            <Route path="salad" element={<Salad />} />
          </Route> */}

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 | Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
