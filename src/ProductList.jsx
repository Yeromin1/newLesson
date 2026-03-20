import { Link, useLocation } from "react-router-dom";
import s from "./ProductList.module.css";

export const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <div className={s.list}>
      {products.map((product) => (
        <div key={product.id} className={s.cardWrapper}>
          <Link to={`${product.id}`} state={location}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt=""
            />
            <h3 className={s.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
