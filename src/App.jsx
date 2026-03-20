import css from "./App.module.css";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppBar } from "../AppBar";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const ProductDetails = lazy(() => import("./components/pages/ProductDetails"));
const Products = lazy(() => import("./components/pages/Products"));
const Mission = lazy(() => import("./components/subpages/Mission"));
const Team = lazy(() => import("./components/subpages/Team"));
const Reviews = lazy(() => import("./components/subpages/Reviews"));

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
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
      </Suspense>
    </div>
  );
};
