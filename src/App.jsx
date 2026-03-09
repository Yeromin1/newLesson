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

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </p>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
