import css from "./App.module.css";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Products from "./components/pages/Products";
import clsx from "clsx";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
import { About } from "./components/pages/About";
import { Team } from "./components/subpages/Team";
import { Mission } from "./components/subpages/Mission";
import { Reviews } from "./components/subpages/Reviews";
import { HomePage } from "./components/pages/HomePage";
import { AppBar } from "../AppBar";

export const App = () => {
  return (
    <div>
      <AppBar />

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
